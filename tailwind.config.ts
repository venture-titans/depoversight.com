import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0c10',
          900: '#0d1117',
          800: '#11161d',
          700: '#161b22',
          600: '#1c222b',
          500: '#262d38',
          400: '#3a4250',
        },
        line: {
          DEFAULT: '#262d38',
          strong: '#3a4250',
        },
        fg: {
          DEFAULT: '#e6edf3',
          muted: '#9aa4b2',
          subtle: '#6b7686',
        },
        accent: {
          DEFAULT: '#7c8cff',
          hover: '#94a1ff',
          ring: '#5d6dff',
        },
        success: '#3fb950',
        warning: '#d29922',
        danger: '#f85149',
        review: '#a371f7',
        monitor: '#58a6ff',
        blocked: '#db6d28',
      },
      fontFamily: {
        sans: [
          '"Inter Variable"',
          '"Inter"',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono Variable"',
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      boxShadow: {
        card: '0 0 0 1px rgba(58, 66, 80, 0.6)',
        'card-hover': '0 0 0 1px rgba(124, 140, 255, 0.5)',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};

export default config;
