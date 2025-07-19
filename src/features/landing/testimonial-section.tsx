import { SectionLabel } from "@shared/components"
import * as React from "react"
import * as motion from "motion/react-client"
import { TestimonialList } from "./testimonial-list"

export function TestimonialSection(): React.ReactElement {
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
      id="testimonial"
    >
      <div className="flex items-center">
        <SectionLabel>Testimonial</SectionLabel>
      </div>

      <h2 className="text-3xl tablet:text-5xl font-bold text-center leading-tight tracking-tight mt-10 font-bricolage">
        Trusted by
        <br />
        leading brands
      </h2>

      <p className="text-foreground/60 mt-10 text-center tablet:w-9/12 laptop:w-8/12 leading-relaxed text-pretty">
        What's make me proud
        <br />
        are the people's love
      </p>

      <div className="flex justify-center w-full mt-28">
        <TestimonialList />
      </div>
    </motion.section>
  )
}
