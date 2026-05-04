import { Fragment, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from '../ui/Badge';
import { SeverityPill } from '../ui/SeverityPill';
import { Button, LinkButton } from '../ui/Button';
import {
  DASHBOARD_METRICS,
  DEPENDENCY,
  PROJECT,
  SCENARIO,
  SIGNALS,
} from '../../data/signals';
import { TIMELINE_EVENTS } from '../../data/timeline';
import type { Severity, SignalMeta } from '../../data/types';
import { DashboardSidebar, DashboardSidebarCompact } from './DashboardSidebar';

type Filter = 'all' | Severity;

const FILTERS: ReadonlyArray<Filter> = ['all', 'high', 'review', 'monitoring', 'blocked'];

export function DemoDashboard() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>('all');
  const [selectedId, setSelectedId] = useState<SignalMeta['id'] | null>(SIGNALS[0].id);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showPrCheck, setShowPrCheck] = useState(false);

  const visible = useMemo(
    () => (filter === 'all' ? SIGNALS : SIGNALS.filter((s) => s.severity === filter)),
    [filter]
  );

  // If the active filter excludes the currently selected signal, drop the selection
  // (rather than auto-selecting another) so the desktop detail panel shows the
  // empty state and the user re-engages explicitly.
  useEffect(() => {
    if (selectedId && !visible.find((s) => s.id === selectedId)) {
      setSelectedId(null);
    }
  }, [visible, selectedId]);

  const selected = SIGNALS.find((s) => s.id === selectedId);

  useEffect(() => {
    if (!showTimeline && !showPrCheck) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowTimeline(false);
        setShowPrCheck(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showTimeline, showPrCheck]);

  return (
    <section
      id="demo"
      className="scroll-mt-20 border-b border-line/60 bg-gradient-to-b from-ink-900/40 to-ink-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent">
            {t('demo.sectionTitle')}
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            {t('demo.sectionTitle')}
          </h2>
          <p className="mt-4 text-balance text-base text-fg-muted sm:text-lg">
            {t('demo.sectionLead')}
          </p>
        </div>

        {/* Worked-example scenario banner — frames the dashboard as an
         * illustrative reconstruction of a real public OSS incident, not a
         * real-time view. This is the load-bearing disclaimer for the demo. */}
        <div className="mx-auto mb-6 max-w-[1400px] rounded-lg border border-warning/30 bg-warning/5 px-5 py-4">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-warning">
            {t('demo.scenario.eyebrow')}
          </p>
          <h3 className="mt-1.5 text-balance text-base font-semibold text-fg sm:text-lg">
            {t('demo.scenario.title')}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-fg-muted">
            {t('demo.scenario.framing')}
          </p>
          <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs">
            <span className="font-medium uppercase tracking-wider text-fg-subtle">
              {t('demo.scenario.sourcesLabel')}:
            </span>
            {SCENARIO.sources.map((src) => (
              <a
                key={src.url}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover underline-offset-2 hover:underline"
              >
                {src.label}
              </a>
            ))}
          </div>
        </div>

        {/* Dashboard frame */}
        <div className="overflow-hidden rounded-xl border border-line-strong bg-ink-900 shadow-2xl">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-line bg-ink-800/80 px-4 py-2.5">
            <div className="flex gap-1.5">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-ink-600" />
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-ink-600" />
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-ink-600" />
            </div>
            <p className="ml-2 truncate font-mono text-xs text-fg-subtle">
              {t('demo.headerLine', { project: PROJECT, dependency: DEPENDENCY })}
            </p>
          </div>

          <div className="flex min-h-[640px] flex-col lg:flex-row">
            {/* Sidebar (desktop) + compact bar (tablet/mobile) */}
            <DashboardSidebar filter={filter} onFilterChange={setFilter} />
            <DashboardSidebarCompact filter={filter} onFilterChange={setFilter} />

            {/* Main */}
            <div className="flex min-w-0 flex-1 flex-col">
              <ProjectHeader />
              <MetricsRow />
              <FilterBar
                filter={filter}
                onFilterChange={setFilter}
                onTimeline={() => setShowTimeline(true)}
                onPrCheck={() => setShowPrCheck(true)}
              />

              {/* Signal list + detail */}
              <div className="grid min-w-0 flex-1 grid-cols-1 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
                <ul className="divide-y divide-line border-b border-line lg:border-b-0 lg:border-r">
                  {visible.length === 0 && (
                    <li className="px-5 py-8 text-sm text-fg-subtle">
                      {t('demo.filters.empty')}
                    </li>
                  )}
                  {visible.map((signal) => (
                    <Fragment key={signal.id}>
                      <li>
                        <SignalRow
                          signal={signal}
                          selected={selected?.id === signal.id}
                          onSelect={() =>
                            setSelectedId(selected?.id === signal.id ? null : signal.id)
                          }
                        />
                      </li>
                      {/* Inline detail on mobile/tablet only — appears immediately below the selected card */}
                      {selected?.id === signal.id && (
                        <li className="lg:hidden">
                          <div className="border-t border-line bg-ink-800/60">
                            <SignalDetail
                              signal={signal}
                              onClose={() => setSelectedId(null)}
                              onTimeline={() => setShowTimeline(true)}
                              onPrCheck={() => setShowPrCheck(true)}
                            />
                          </div>
                        </li>
                      )}
                    </Fragment>
                  ))}
                </ul>
                {/* Side-by-side detail on desktop */}
                <div className="hidden min-w-0 lg:block">
                  {selected ? (
                    <SignalDetail
                      signal={selected}
                      onClose={() => setSelectedId(null)}
                      onTimeline={() => setShowTimeline(true)}
                      onPrCheck={() => setShowPrCheck(true)}
                    />
                  ) : (
                    <div className="flex h-full min-h-[24rem] items-center justify-center px-8 text-center text-sm text-fg-subtle">
                      {t('demo.detail.empty')}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-fg-subtle">
          {t('demo.disclaimer')}
        </p>
      </div>

      {showTimeline && (
        <Modal
          title={t('demo.timelineModalTitle')}
          onClose={() => setShowTimeline(false)}
          closeLabel={t('demo.prCheck.close')}
        >
          <ol className="space-y-3">
            {TIMELINE_EVENTS.map((event) => (
              <li
                key={event.id}
                className={`flex items-start gap-4 rounded-md border px-4 py-3 ${
                  event.inExposureWindow
                    ? 'border-accent/40 bg-accent/5'
                    : 'border-line bg-ink-800/60'
                }`}
              >
                <span className="min-w-[4.5rem] font-mono text-xs uppercase text-fg-subtle">
                  {t(`timeline.events.${event.id}.day`)}
                </span>
                <span className="text-sm text-fg">{t(`timeline.events.${event.id}.label`)}</span>
              </li>
            ))}
          </ol>
        </Modal>
      )}

      {showPrCheck && (
        <Modal
          title={t('demo.prCheck.title')}
          onClose={() => setShowPrCheck(false)}
          closeLabel={t('demo.prCheck.close')}
        >
          <PrCheckPreview />
        </Modal>
      )}
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*                              Sub-components                            */
/* ---------------------------------------------------------------------- */

function ProjectHeader() {
  const { t } = useTranslation();
  return (
    <div className="grid gap-3 border-b border-line bg-ink-800/40 px-5 py-4 sm:grid-cols-3 sm:gap-6">
      <Field label={t('demo.project')}>
        <span className="break-all font-mono text-sm text-fg">{PROJECT}</span>
      </Field>
      <Field label={t('demo.dependency')}>
        <span className="break-all font-mono text-xs text-fg">{DEPENDENCY}</span>
      </Field>
      <Field label={t('demo.status')}>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="review">{t('demo.statusReviewRequired')}</Badge>
          {/* Reconstruction indicator — warning-amber tone + scenario date so
           * "this is historical, not live monitoring" is unmistakable inside
           * the dashboard chrome. */}
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-warning"
            aria-label={`${t('demo.replay')} · ${t('demo.replayDate')}`}
          >
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-warning" />
            {t('demo.replay')} · {t('demo.replayDate')}
          </span>
        </div>
      </Field>
    </div>
  );
}

function MetricsRow() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-2 gap-px border-b border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
      <Metric value={DASHBOARD_METRICS.signals} label={t('demo.metrics.signals')} />
      <Metric value={DASHBOARD_METRICS.exposureWindow} label={t('demo.metrics.exposureWindow')} />
      <Metric value={DASHBOARD_METRICS.disclosure} label={t('demo.metrics.disclosure')} />
      <Metric value={DASHBOARD_METRICS.sensitivePrs} label={t('demo.metrics.sensitivePrs')} />
      <Metric
        value={DASHBOARD_METRICS.advisories}
        label={t('demo.metrics.advisories')}
        zero={DASHBOARD_METRICS.advisories === 0}
      />
    </div>
  );
}

function FilterBar({
  filter,
  onFilterChange,
  onTimeline,
  onPrCheck,
}: {
  filter: Filter;
  onFilterChange: (next: Filter) => void;
  onTimeline: () => void;
  onPrCheck: () => void;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-line bg-ink-900/60 px-4 py-3 sm:px-5">
      <span className="mr-1 hidden text-xs font-medium uppercase tracking-wider text-fg-subtle sm:inline">
        {t('demo.filters.label')}
      </span>
      <div className="-mx-1 flex flex-1 flex-nowrap gap-1.5 overflow-x-auto px-1" role="tablist" aria-label={t('demo.filters.label')}>
        {FILTERS.map((f) => {
          // Count signals matching this filter so we can hide empty severities
          // and append a count to the label — matches how a real dashboard chip
          // would behave and avoids dead filter options in the demo.
          const count = f === 'all' ? SIGNALS.length : SIGNALS.filter((s) => s.severity === f).length;
          if (f !== 'all' && count === 0) return null;
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onFilterChange(f)}
              className={`h-8 flex-none rounded-md border px-3 text-xs font-medium transition-colors ${
                active
                  ? 'border-accent/60 bg-accent/10 text-fg'
                  : 'border-line bg-ink-800 text-fg-muted hover:border-line-strong hover:text-fg'
              }`}
            >
              {t(`demo.filters.${f}`)}{' '}
              <span className="opacity-60">{count}</span>
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" size="sm" onClick={onTimeline}>
          {t('demo.timelineButton')}
        </Button>
        <Button variant="secondary" size="sm" onClick={onPrCheck}>
          {t('demo.prCheckButton')}
        </Button>
      </div>
    </div>
  );
}

function SignalRow({
  signal,
  selected,
  onSelect,
}: {
  signal: SignalMeta;
  selected: boolean;
  onSelect: () => void;
}) {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group block w-full px-4 py-4 text-left transition-colors sm:px-5 ${
        selected ? 'bg-ink-700/60' : 'hover:bg-ink-800'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 flex-none rounded-full ${selectedDotFor(signal.severity)}`}
            />
            <h3 className="text-balance text-sm font-semibold leading-snug text-fg">
              {t(`demo.signals.${signal.id}.title`)}
            </h3>
          </div>
          <div className="mt-1 break-all font-mono text-[0.7rem] text-fg-subtle">
            {signal.dependency}
          </div>
        </div>
        <SeverityPill severity={signal.severity} />
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <Badge tone="neutral">{t(`demo.sourceType.${signal.sourceTypeKey}`)}</Badge>
        <Badge tone={statusTone(signal.severity)}>
          {t(`demo.statusLabels.${signal.statusKey}`)}
        </Badge>
      </div>
    </button>
  );
}

function SignalDetail({
  signal,
  onClose,
  onTimeline,
  onPrCheck,
}: {
  signal: SignalMeta;
  onClose: () => void;
  onTimeline: () => void;
  onPrCheck: () => void;
}) {
  const { t } = useTranslation();
  const whyFlagged = t(`demo.signals.${signal.id}.whyFlagged`, {
    returnObjects: true,
  }) as string[];

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3 border-b border-line px-5 py-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-fg">
            {t(`demo.signals.${signal.id}.title`)}
          </h3>
          <p className="mt-1 break-all font-mono text-xs text-fg-subtle">
            {signal.dependency}
          </p>
        </div>
        <SeverityPill severity={signal.severity} />
      </div>

      <div className="flex-1 space-y-5 px-5 py-5">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs">
          <DefRow
            label={t('demo.detail.severity')}
            value={t(`demo.severity.${signal.severity}`)}
          />
          <DefRow
            label={t('demo.detail.status')}
            value={t(`demo.statusLabels.${signal.statusKey}`)}
          />
          <DefRow
            label={t('demo.detail.sourceType')}
            value={t(`demo.sourceType.${signal.sourceTypeKey}`)}
          />
          <DefRow label={t('demo.detail.dependency')} value={signal.dependency} mono />
        </dl>

        <Block title={t('demo.detail.summary')}>
          <p className="text-sm leading-relaxed text-fg-muted">
            {t(`demo.signals.${signal.id}.summary`)}
          </p>
        </Block>

        <Block title={t('demo.detail.whyFlagged')}>
          <ul className="space-y-1.5">
            {whyFlagged.map((reason, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-fg-muted">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1 w-1 flex-none rounded-full bg-fg-subtle"
                />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block title={t('demo.detail.recommendedAction')}>
          <p className="text-sm leading-relaxed text-fg-muted">
            {t(`demo.signals.${signal.id}.recommendedAction`)}
          </p>
        </Block>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-line bg-ink-800/40 px-5 py-3">
        <LinkButton href={signal.sourceUrl} variant="ghost" size="sm">
          {t('demo.detail.viewSource')}
          <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden="true">
            <path
              d="M4.5 2.5h5v5M9.5 2.5L4 8M2.5 5v4.5h4.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </LinkButton>
        <Button variant="ghost" size="sm" onClick={onTimeline}>
          {t('demo.detail.viewTimeline')}
        </Button>
        <Button variant="ghost" size="sm" onClick={onPrCheck}>
          {t('demo.detail.viewPrCheck')}
        </Button>
        <Button variant="ghost" size="sm" onClick={onClose} className="ml-auto lg:hidden">
          {t('demo.detail.back')}
        </Button>
      </div>
    </div>
  );
}

function PrCheckPreview() {
  const { t } = useTranslation();
  const reasons = t('demo.prCheck.reasons', { returnObjects: true }) as string[];
  return (
    <div className="rounded-md border border-line bg-ink-900">
      {/* Check header — GitHub-check style */}
      <div className="flex items-start gap-3 border-b border-line px-4 py-3">
        <span
          aria-hidden="true"
          className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-warning/15 text-warning"
          title="Review required"
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
            <path
              d="M8 4v4.5M8 11.25v.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M7.13 2.5a1 1 0 011.74 0l5.5 9.5a1 1 0 01-.87 1.5h-11a1 1 0 01-.87-1.5l5.5-9.5z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-fg">{t('demo.prCheck.title')}</p>
          <p className="text-xs text-warning">{t('demo.prCheck.result')}</p>
        </div>
      </div>

      <div className="space-y-4 px-4 py-4">
        <p className="text-sm text-fg-muted">{t('demo.prCheck.summary')}</p>

        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-fg-subtle">
            {t('demo.prCheck.dependencyLabel')}
          </p>
          <p className="mt-1 break-all rounded-md border border-line bg-ink-800 px-2.5 py-1.5 font-mono text-xs text-fg">
            {DEPENDENCY}
          </p>
        </div>

        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-fg-subtle">
            {t('demo.prCheck.reasonsLabel')}
          </p>
          <ul className="mt-2 space-y-1.5">
            {reasons.map((reason, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-fg-muted">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1 w-1 flex-none rounded-full bg-fg-subtle"
                />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="rounded-md border border-warning/30 bg-warning/5 px-3 py-2 text-sm text-fg">
          {t('demo.prCheck.footer')}
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*                              Primitives                                */
/* ---------------------------------------------------------------------- */

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="min-w-0">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-fg-subtle">
        {label}
      </p>
      <div className="mt-1">{children}</div>
    </div>
  );
}

function Metric({
  value,
  label,
  zero = false,
}: {
  value: number;
  label: string;
  zero?: boolean;
}) {
  return (
    <div className="bg-ink-900 px-4 py-4 sm:px-5">
      <p className={`font-mono text-2xl ${zero ? 'text-fg-muted' : 'text-fg'}`}>{value}</p>
      <p className="mt-1 text-xs leading-snug text-fg-muted">{label}</p>
    </div>
  );
}

function DefRow({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="min-w-0">
      <dt className="text-[0.65rem] uppercase tracking-wider text-fg-subtle">{label}</dt>
      <dd className={`mt-0.5 break-all text-fg ${mono ? 'font-mono text-xs' : 'text-sm'}`}>
        {value}
      </dd>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-fg-subtle">
        {title}
      </p>
      {children}
    </div>
  );
}

function Modal({
  title,
  children,
  onClose,
  closeLabel,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  closeLabel: string;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4"
    >
      <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-t-xl border border-line-strong bg-ink-900 shadow-2xl sm:rounded-xl">
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <h3 className="text-sm font-semibold text-fg">{title}</h3>
          <button
            type="button"
            aria-label={closeLabel}
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-fg-muted hover:bg-ink-700 hover:text-fg"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
              <path
                d="M4 4L12 12M12 4L4 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto px-5 py-4">{children}</div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*                                 Helpers                                */
/* ---------------------------------------------------------------------- */

function selectedDotFor(severity: Severity): string {
  switch (severity) {
    case 'high':
      return 'bg-danger';
    case 'review':
      return 'bg-review';
    case 'monitoring':
      return 'bg-monitor';
    case 'blocked':
      return 'bg-blocked';
  }
}

function statusTone(severity: Severity): 'danger' | 'review' | 'monitor' | 'blocked' {
  switch (severity) {
    case 'high':
      return 'danger';
    case 'review':
      return 'review';
    case 'monitoring':
      return 'monitor';
    case 'blocked':
      return 'blocked';
  }
}
