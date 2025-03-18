import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { HeroSection } from './hero-section'
import { ProcessSection } from './process-section'
import { BenefitsSection } from './benefits-section'
import { ServiceSection } from './service-section'
import { FAQSection } from './faq-section'
import { CTASection } from './cta-section'
import { PlanSection } from './plan-section'

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
    <div className="flex flex-col">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <ServiceSection />
      <PlanSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
