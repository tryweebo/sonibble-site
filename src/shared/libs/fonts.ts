import { Inter, Bricolage_Grotesque } from 'next/font/google'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

const bricolage = Bricolage_Grotesque({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-bricolage',
})

export const fonts = {
  inter,
  bricolage,
}
