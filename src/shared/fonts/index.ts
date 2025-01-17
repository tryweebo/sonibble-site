import { Inter } from 'next/font/google'

// TODO: Add your font here
// and add to tailwind.config.js
const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

export const fonts = {
  inter,
}
