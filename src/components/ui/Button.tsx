import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md';

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:opacity-50 disabled:pointer-events-none';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent text-ink-950 hover:bg-accent-hover shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]',
  secondary:
    'bg-ink-700 text-fg border border-line-strong hover:bg-ink-600 hover:border-fg-subtle',
  ghost: 'bg-transparent text-fg-muted hover:text-fg hover:bg-ink-700',
};

const sizeClasses: Record<Size, string> = {
  // Inline / dense actions inside the dashboard. Tappable but compact.
  sm: 'h-8 px-3 text-sm',
  // Primary marketing CTAs. h-11 = 44px, the iOS HIG minimum tap target.
  md: 'h-11 px-4 text-sm',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
