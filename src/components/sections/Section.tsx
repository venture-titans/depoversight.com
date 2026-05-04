import { useId, type ReactNode } from 'react';

type Tone = 'default' | 'subtle';

interface Props {
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  children: ReactNode;
  className?: string;
  /**
   * Visual rhythm: 'default' uses the page background, 'subtle' uses a slightly
   * lifted ink tone so adjacent sections feel like distinct chunks.
   */
  tone?: Tone;
}

const toneClasses: Record<Tone, string> = {
  default: 'bg-transparent',
  subtle: 'bg-ink-900/40',
};

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = '',
  tone = 'default',
}: Props) {
  const headingId = useId();
  const labelledBy = title ? headingId : undefined;
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-20 border-b border-line/60 py-16 sm:py-20 lg:py-24 ${toneClasses[tone]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || lead) && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {eyebrow && (
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                id={headingId}
                className="text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
              >
                {title}
              </h2>
            )}
            {lead && (
              <p className="mt-4 text-balance text-base text-fg-muted sm:text-lg">{lead}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
