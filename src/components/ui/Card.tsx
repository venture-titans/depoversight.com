import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  interactive?: boolean;
  selected?: boolean;
}

export function Card({
  children,
  interactive = false,
  selected = false,
  className = '',
  ...rest
}: CardProps) {
  const base =
    'rounded-lg border border-line bg-ink-800 p-5 transition-colors';
  const interactiveCls = interactive
    ? 'cursor-pointer hover:border-line-strong hover:bg-ink-700'
    : '';
  const selectedCls = selected
    ? 'border-accent/60 bg-ink-700 ring-1 ring-accent/40'
    : '';
  return (
    <div className={`${base} ${interactiveCls} ${selectedCls} ${className}`} {...rest}>
      {children}
    </div>
  );
}
