import { Button, SectionLabel } from "@shared/components";
import * as motion from "motion/react-client";
import type * as React from "react";

export function CTASection(): React.ReactElement {
  return (
    <motion.section
      className="flex flex-col items-center py-28"
      id="cta"
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
        <SectionLabel>Get started</SectionLabel>
      </div>
      <h2 className="mt-10 text-center font-medium tablet:text-5xl text-3xl leading-tight tracking-tight">
        Quick spot
        <br />
        just for you
      </h2>

      <p className="mt-10 laptop:w-9/12 tablet:w-8/12 text-pretty text-center text-foreground/50 leading-relaxed">
        We offering limited spot to serve each months. Start now and enjoy the
        benefits of our services. Connect with us today!
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <span className="hover:-translate-y-1 flex cursor-pointer items-center gap-2 text-sm transition-all duration-300">
          <i className="fi fi-sc-check-circle text-green-500" />
          No bullshit
        </span>
        <span className="hover:-translate-y-1 flex cursor-pointer items-center gap-2 text-sm transition-all duration-300">
          <i className="fi fi-sc-check-circle text-green-500" />
          Quick meeting
        </span>
        <span className="hover:-translate-y-1 flex cursor-pointer items-center gap-2 text-sm transition-all duration-300">
          <i className="fi fi-sc-check-circle text-green-500" />
          Perfect spot
        </span>
      </div>

      <div className="mt-16 flex justify-center">
        <Button
          asChild
          className="hover:-translate-y-2 transition-all duration-300 hover:scale-95"
          size={"md"}
          variant={"primary"}
        >
          <a
            href={"https://cal.com/nyomansunima/sonibble-intro-call"}
            rel="noopener"
            target="_blank"
          >
            Book a call
            <i className="fi fi-sc-check-circle" />
          </a>
        </Button>
      </div>
    </motion.section>
  );
}
