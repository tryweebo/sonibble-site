import { Figtree } from 'next/font/google'

// TODO: Add your font here
// and add to tailwind.config.js
const figtree = Figtree({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-figtree',
})

export const fonts = {
  figtree,
}
