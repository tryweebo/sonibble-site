import {
  BenefitSection,
  CTASection,
  FAQSection,
  HeroSection,
  PlanSection,
  ProcessSection,
  ServiceSection,
} from "@features/landing";
import { generatedMetadata } from "@shared/libs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Your business growth & success partner | Sonibble",
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
      <BenefitSection />
      <ProcessSection />
      <ServiceSection />
      <PlanSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
