import { SectionLabel } from "@shared/components";
import * as motion from "motion/react-client";
import type * as React from "react";

export function TestimonialSection(): React.ReactElement {
  return (
    <motion.section
      className="flex flex-col items-center py-28"
      id="testimonial"
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
        <SectionLabel>Testimonial</SectionLabel>
      </div>

      <h2 className="mt-10 text-center font-bold font-bricolage tablet:text-5xl text-3xl leading-tight tracking-tight">
        Trusted by
        <br />
        leading brands
      </h2>

      <p className="mt-10 laptop:w-8/12 tablet:w-9/12 text-pretty text-center text-foreground/60 leading-relaxed">
        What's make me proud
        <br />
        are the people's love
      </p>

      <div className="mt-28 flex w-full justify-center" />
    </motion.section>
  );
}
