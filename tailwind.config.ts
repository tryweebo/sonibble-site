import type { Config } from 'tailwindcss'
import form from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import animation from 'tailwindcss-animate'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,json}'],
  darkMode: ['selector'],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)'],
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      fontSize: {
        sm: '.84375rem',
        base: '.9375rem',
        lg: '1.03125rem',
        xl: '1.125rem',
      },
      colors: {
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        surface: 'hsl(var(--color-surface))',
        border: 'hsl(var(--color-border))',
        input: 'hsl(var(--color-input))',
        link: 'hsl(var(--color-link))',
        accent: 'hsl(var(--color-accent))',
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          foreground: 'hsl(var(--color-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary))',
          foreground: 'hsl(var(--color-secondary-foreground))',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': theme('colors.foreground'),
            '--tw-prose-body': theme('colors.foreground'),
            '--tw-prose-links': theme('colors.link'),
            '--tw-prose-bold': theme('colors.foreground'),
            '--tw-prose-counters': theme('colors.foreground'),
            '--tw-prose-bullets': theme('colors.foreground'),
            '--tw-prose-hr': theme('colors.border'),
            '--tw-prose-quotes': theme('colors.secondary'),
            '--tw-prose-quote-borders': theme('colors.foreground'),
            '--tw-prose-captions': theme('colors.secondary'),
            '--tw-prose-code': theme('colors.foreground'),
            '--tw-prose-pre-code': theme('colors.foreground'),
            '--tw-prose-pre-bg': theme('colors.surface'),
            '--tw-prose-th-borders': theme('colors.border'),
            '--tw-prose-td-borders': theme('colors.border'),

            fontSize: theme('fontSize.base'),
            fontWeight: '400',

            a: {
              textDecoration: 'none',
              fontWeight: '400 !important',

              '&:hover': {
                textDecoration: 'underline',
              },
            },

            em: {
              fontStyle: 'italic',
              color: theme('colors.accent'),
            },

            strong: {
              fontWeight: '500',
            },

            h1: {
              fontSize: theme('fontSize.xl'),
              fontWeight: '500',
            },

            h2: {
              fontSize: theme('fontSize.lg'),
              fontWeight: '500',
            },

            h3: {
              fontSize: theme('fontSize.base'),
              fontWeight: '500',
            },
          },
        },
      }),
    },
  },
  plugins: [typography, form, animation],
}

export default config
