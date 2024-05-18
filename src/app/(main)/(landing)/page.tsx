import * as React from 'react'
import Hero from './hero'
import Service from './service'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/app/shared-metadata'
import BestFits from './best-fits'
import Benefits from './benefits'
import Offers from './offers'
import Resources from './resources'
import FAQs from './faqs'
import Process from './process'

export const metadata: Metadata = {
  title: 'Your Business Growth & Success Partner | Sonibble',
  description:
    'We help small business, startups, and professional grow, scale & win the game',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Your Business Growth & Success Partner | Sonibble',
    description:
      'We help small business, startups, and professional grow, scale & win the game',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Your Business Growth & Success Partner | Sonibble',
    description:
      'We help small business, startups, and professional grow, scale & win the game',
  },
}

export default function HomePage(): Readonly<React.ReactElement> {
  return (
    <main className="">
      <Hero />
      <Process />
      <BestFits />
      <Service />
      <Benefits />
      <Offers />
      <Resources />
      <FAQs />
    </main>
  )
}
