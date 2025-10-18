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
} from "@features/landing";
import { generatedMetadata } from "@shared/libs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Your Business Growth & Success Partner | Sonibble",
      description:
        "We help small business, startups, and professional grow, scale & win the game",
    }),
  }),
  component: PageComponent,
});

function PageComponent() {
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
  );
}
