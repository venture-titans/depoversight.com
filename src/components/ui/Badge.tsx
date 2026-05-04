import type { ReactNode } from 'react';

type Tone = 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'review' | 'monitor' | 'blocked';

const toneClasses: Record<Tone, string> = {
  neutral: 'bg-ink-700 text-fg-muted border-line-strong',
  accent: 'bg-accent/10 text-accent border-accent/30',
  success: 'bg-success/10 text-success border-success/30',
  warning: 'bg-warning/10 text-warning border-warning/30',
  danger: 'bg-danger/10 text-danger border-danger/30',
  review: 'bg-review/10 text-review border-review/30',
  monitor: 'bg-monitor/10 text-monitor border-monitor/30',
  blocked: 'bg-blocked/10 text-blocked border-blocked/30',
};

export function Badge({ tone = 'neutral', children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded border px-2 py-0.5 text-xs font-medium ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
