import { useTranslation } from 'react-i18next';
import { PROJECTS, SIDEBAR_INTEGRATIONS } from '../../data/signals';
import type { Severity } from '../../data/types';

type SeverityFilter = 'all' | Severity;
type SeverityShortcut = 'high' | 'review' | 'monitoring' | 'resolved';

const SEVERITY_SHORTCUTS: ReadonlyArray<SeverityShortcut> = [
  'high',
  'review',
  'monitoring',
  'resolved',
];

interface Props {
  filter: SeverityFilter;
  onFilterChange: (next: SeverityFilter) => void;
  // Resolved is a sidebar-only category that has no items in the demo dataset; it
  // shows the empty state when selected to demonstrate the empty-state UI.
}

export function DashboardSidebar({ filter, onFilterChange }: Props) {
  const { t } = useTranslation();

  const onShortcut = (shortcut: SeverityShortcut) => {
    if (shortcut === 'resolved') {
      // No 'resolved' severity in the demo dataset — surface the empty state by
      // mapping to 'monitoring' (which also has zero items in the demo).
      onFilterChange('monitoring');
    } else {
      onFilterChange(shortcut);
    }
  };

  return (
    <aside className="hidden h-full flex-none flex-col gap-6 border-r border-line bg-ink-900/60 p-5 lg:flex lg:w-56">
      <div className="flex items-center gap-2">
        <img
          src="/favicon-96x96.png"
          alt=""
          aria-hidden="true"
          width={28}
          height={28}
          className="h-7 w-7 rounded-md"
        />
        <span className="text-sm font-semibold tracking-tight">
          {t('demo.sidebar.brand')}
        </span>
      </div>

      <SidebarGroup label={t('demo.sidebar.sections.projects')}>
        <ul className="space-y-0.5">
          {PROJECTS.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                aria-current={p.active ? 'page' : undefined}
                aria-disabled={!p.active}
                tabIndex={p.active ? 0 : -1}
                className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors ${
                  p.active
                    ? 'bg-ink-700 text-fg'
                    : 'text-fg-subtle hover:text-fg-muted'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${
                    p.active ? 'bg-accent' : 'bg-fg-subtle/50'
                  }`}
                />
                <span className="font-mono text-xs">{t(`demo.projects.${p.id}`)}</span>
              </button>
            </li>
          ))}
        </ul>
      </SidebarGroup>

      <SidebarGroup label={t('demo.sidebar.sections.signals')}>
        <ul className="space-y-0.5">
          {SEVERITY_SHORTCUTS.map((shortcut) => {
            const isActive =
              (shortcut === 'high' && filter === 'high') ||
              (shortcut === 'review' && filter === 'review') ||
              (shortcut === 'monitoring' && filter === 'monitoring');
            return (
              <li key={shortcut}>
                <button
                  type="button"
                  onClick={() => onShortcut(shortcut)}
                  aria-pressed={isActive}
                  className={`flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors ${
                    isActive
                      ? 'bg-ink-700 text-fg'
                      : 'text-fg-muted hover:bg-ink-800 hover:text-fg'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${dotColorFor(shortcut)}`}
                    />
                    {t(`demo.sidebar.severityShortcuts.${shortcut}`)}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </SidebarGroup>

      <SidebarGroup label={t('demo.sidebar.sections.integrations')}>
        <ul className="space-y-0.5">
          {SIDEBAR_INTEGRATIONS.map((integration) => (
            <li key={integration}>
              <span className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-fg-muted">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-fg-subtle/40" />
                {t(`demo.sidebar.integrations.${integration}`)}
              </span>
            </li>
          ))}
        </ul>
      </SidebarGroup>
    </aside>
  );
}

/** Compact horizontal version of the sidebar, shown above the main area on tablet. */
export function DashboardSidebarCompact({ filter, onFilterChange }: Props) {
  const { t } = useTranslation();
  const active = PROJECTS.find((p) => p.active);
  return (
    <div className="flex flex-col gap-3 border-b border-line bg-ink-900/60 px-4 py-3 lg:hidden">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <span className="text-xs uppercase tracking-wider text-fg-subtle">
          {t('demo.sidebar.collapseLabel')}
        </span>
        {active && (
          <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-ink-800 px-2 py-0.5 font-mono text-xs text-fg">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t(`demo.projects.${active.id}`)}
          </span>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        {SEVERITY_SHORTCUTS.map((shortcut) => {
          const isActive =
            (shortcut === 'high' && filter === 'high') ||
            (shortcut === 'review' && filter === 'review') ||
            (shortcut === 'monitoring' && filter === 'monitoring');
          return (
            <button
              key={shortcut}
              type="button"
              onClick={() =>
                onFilterChange(shortcut === 'resolved' ? 'monitoring' : shortcut)
              }
              aria-pressed={isActive}
              className={`inline-flex h-7 items-center gap-1.5 rounded-md border px-2.5 text-xs font-medium transition-colors ${
                isActive
                  ? 'border-accent/60 bg-accent/10 text-fg'
                  : 'border-line bg-ink-800 text-fg-muted hover:border-line-strong hover:text-fg'
              }`}
            >
              <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${dotColorFor(shortcut)}`} />
              {t(`demo.sidebar.severityShortcuts.${shortcut}`)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SidebarGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 px-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-fg-subtle">
        {label}
      </p>
      {children}
    </div>
  );
}

function dotColorFor(shortcut: SeverityShortcut): string {
  switch (shortcut) {
    case 'high':
      return 'bg-danger';
    case 'review':
      return 'bg-review';
    case 'monitoring':
      return 'bg-monitor';
    case 'resolved':
      return 'bg-success';
  }
}
