import { useTranslation } from 'react-i18next';
import { Section } from './Section';
import { COMPARISON_ROWS, type ComparisonIcon } from '../../data/comparison';

interface Row {
  capability: string;
  scanner: string;
  depoversight: string;
}

interface Columns {
  capability: string;
  scanner: string;
  depoversight: string;
}

export function Comparison() {
  const { t } = useTranslation();
  const rows = t('comparison.rows', { returnObjects: true }) as Row[];
  const columns = t('comparison.columns', { returnObjects: true }) as Columns;
  return (
    <Section
      id="comparison"
      title={t('comparison.sectionTitle')}
      lead={t('comparison.sectionLead')}
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-line">
        {/* Desktop / tablet table */}
        <table className="hidden w-full border-collapse text-sm sm:table">
          <thead className="bg-ink-800">
            <tr>
              <th className="border-b border-line px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-fg-subtle">
                {columns.capability}
              </th>
              <th className="border-b border-line px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-fg-subtle">
                {columns.scanner}
              </th>
              <th className="border-b border-line bg-accent/5 px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-accent">
                {columns.depoversight}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const meta = COMPARISON_ROWS[i];
              return (
                <tr key={i} className="bg-ink-900">
                  <td className="border-b border-line/60 px-4 py-3 text-fg">{row.capability}</td>
                  <td className="border-b border-line/60 px-4 py-3 text-fg-muted">
                    <Cell icon={meta?.scannerIcon ?? 'dash'} text={row.scanner} muted />
                  </td>
                  <td className="border-b border-line/60 bg-accent/5 px-4 py-3 text-fg">
                    <Cell icon={meta?.depoversightIcon ?? 'check'} text={row.depoversight} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* Mobile stacked list */}
        <ul className="divide-y divide-line bg-ink-900 sm:hidden">
          {rows.map((row, i) => {
            const meta = COMPARISON_ROWS[i];
            return (
              <li key={i} className="px-4 py-4">
                <p className="text-sm font-medium text-fg">{row.capability}</p>
                <div className="mt-2 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-fg-subtle uppercase tracking-wider">{columns.scanner}</p>
                    <div className="mt-1">
                      <Cell icon={meta?.scannerIcon ?? 'dash'} text={row.scanner} muted />
                    </div>
                  </div>
                  <div>
                    <p className="text-accent uppercase tracking-wider">{columns.depoversight}</p>
                    <div className="mt-1">
                      <Cell icon={meta?.depoversightIcon ?? 'check'} text={row.depoversight} />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Footnote acknowledging tools like Socket overlap. Addresses
       * customer-review issue #7 — generic "CVE scanner" framing felt
       * like a strawman. */}
      <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-fg-subtle">
        {t('comparison.note')}
      </p>
    </Section>
  );
}

function Cell({
  icon,
  text,
  muted = false,
}: {
  icon: ComparisonIcon;
  text: string;
  muted?: boolean;
}) {
  return (
    <span className={`inline-flex items-start gap-2 ${muted ? 'text-fg-muted' : 'text-fg'}`}>
      <Icon icon={icon} />
      <span>{text}</span>
    </span>
  );
}

function Icon({ icon }: { icon: ComparisonIcon }) {
  const tone =
    icon === 'check'
      ? 'border-success/40 bg-success/10 text-success'
      : icon === 'x'
        ? 'border-line-strong bg-ink-700 text-fg-subtle'
        : icon === 'dash'
          ? 'border-warning/40 bg-warning/10 text-warning'
          : 'border-accent/40 bg-accent/10 text-accent'; // 'surface'
  return (
    <span
      aria-hidden="true"
      className={`mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center rounded-sm border ${tone}`}
    >
      {icon === 'check' && (
        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
          <path d="M2.5 6L5 8.5L9.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {icon === 'x' && (
        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
          <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )}
      {icon === 'dash' && (
        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
          <path d="M3 6h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )}
      {icon === 'surface' && (
        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
          <circle cx="6" cy="6" r="2" fill="currentColor" />
        </svg>
      )}
    </span>
  );
}
