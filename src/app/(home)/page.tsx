import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import {
  BenefitsSection,
  FAQSection,
  HeroSection,
  ProcessSection,
  ServiceSection,
} from '@features/home'

export const metadata: Metadata = {
  title: 'Your Business Growth & Success Partner | Sonibble',
  description:
    'We help small business, startups, and professional grow, scale & win the game',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Your Business Growth & Success Partner | Sonibble',
    description:
      'We help small business, startups, and professional grow, scale & win the game',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Your Business Growth & Success Partner | Sonibble',
    description:
      'We help small business, startups, and professional grow, scale & win the game',
  },
}

export default function HomePage(): React.ReactElement {
  return (
    <div className="flex flex-col gap-36">
      <HeroSection />
      <ProcessSection />
      <BenefitsSection />
      <ServiceSection />
      <FAQSection />
    </div>
  )
}
