import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/app/shared-metadata'
import Hero from './hero'
import List from './list'

export const metadata: Metadata = {
  title: 'Our Works | Sonibble',
  description:
    'See our recent work, website, case studies and impact we bring into business through branding',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Our Works | Sonibble',
    description:
      'See our recent work, website, case studies and impact we bring into business through branding',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Our Works | Sonibble',
    description:
      'See our recent work, website, case studies and impact we bring into business through branding',
  },
}

export default function WorksPage() {
  return (
    <main>
      <Hero />
      <List />
    </main>
  )
}
