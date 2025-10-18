import { SectionLabel } from "@shared/components";
import * as motion from "motion/react-client";

const benefits: string[] = [
  "We speak ROI with proven strategy",
  "Responsive and fast communication",
  "Simple and streamline process",
  "Transparent pricing & no hidden fees",
  "World class works",
  "All in services works for business",
];

function Item({ benefit }: { benefit: string }) {
  return (
    <li className="flex cursor-pointer items-center gap-2 text-foreground transition-all duration-300">
      <i className="fi fi-sc-check-circle" />
      {benefit}
    </li>
  );
}

export function BenefitsSection() {
  return (
    <motion.section
      className="flex flex-col items-center py-28"
      id="benefits"
      initial={{ opacity: 0, y: 200 }}
      transition={{
        type: "spring",
        damping: 8,
        stiffness: 60,
        ease: "easeInOut",
        duration: 1.2,
      }}
      viewport={{ once: true, margin: "0% 0% -30% 0%" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center">
        <SectionLabel>Why choose us</SectionLabel>
      </div>
      <h2 className="mt-10 text-center font-medium tablet:text-5xl text-3xl leading-tight tracking-tight">
        Lift up profits
        <br />
        with no headache
      </h2>

      <p className="mt-10 laptop:w-8/12 tablet:w-9/12 text-pretty text-center text-foreground/60 leading-relaxed">
        We helping for your growth
        <br />
        not to make you suffer
      </p>

      <div className="mt-16 flex w-full justify-center">
        <ul className="flex flex-col gap-4">
          {benefits.map((benefit, index) => (
            <Item benefit={benefit} key={index} />
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
