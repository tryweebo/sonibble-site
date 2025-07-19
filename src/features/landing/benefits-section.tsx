import { SectionLabel } from "@shared/components"
import * as motion from "motion/react-client"

const benefits: string[] = [
  "We speak ROI with proven strategy",
  "Responsive and fast communication",
  "Simple and streamline process",
  "Transparent pricing & no hidden fees",
  "World class works",
  "All in services works for business",
]

function Item({ benefit }: { benefit: string }) {
  return (
    <li className="flex items-center gap-2 text-foreground transition-all duration-300 cursor-pointer">
      <i className="fi fi-sc-check-circle" />
      {benefit}
    </li>
  )
}

export function BenefitsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 8,
        stiffness: 60,
        ease: "easeInOut",
        duration: 1.2,
      }}
      viewport={{ once: true, margin: "0% 0% -30% 0%" }}
      className="flex flex-col items-center py-28"
      id="benefits"
    >
      <div className="flex items-center">
        <SectionLabel>Why choose us</SectionLabel>
      </div>
      <h2 className="text-3xl tablet:text-5xl font-medium text-center leading-tight tracking-tight mt-10">
        Lift up profits
        <br />
        with no headache
      </h2>

      <p className="text-foreground/60 mt-10 text-center tablet:w-9/12 laptop:w-8/12 leading-relaxed text-pretty">
        We helping for your growth
        <br />
        not to make you suffer
      </p>

      <div className="flex justify-center mt-16 w-full">
        <ul className="flex flex-col gap-4">
          {benefits.map((benefit, index) => (
            <Item benefit={benefit} key={index} />
          ))}
        </ul>
      </div>
    </motion.section>
  )
}
