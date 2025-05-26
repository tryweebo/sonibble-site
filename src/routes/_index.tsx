import {
  BenefitsSection,
  CTASection,
  FAQSection,
  HeroSection,
  MissionSection,
  PlanSection,
  ProcessSection,
  ServiceSection,
  TestimonialSection,
} from "@features/landing"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Your Business Growth & Success Partner | Sonibble",
    description:
      "We help small business, startups, and professional grow, scale & win the game",
  })
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <MissionSection />
      <ProcessSection />
      <ServiceSection />
      <TestimonialSection />
      <BenefitsSection />
      <PlanSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
