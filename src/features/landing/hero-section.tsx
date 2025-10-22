import { Button, SectionLabel } from "@shared/components";
import type * as React from "react";

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-28" id="hero">
      <div className="flex items-center">
        <SectionLabel>
          <i className="fi fi-sr-heart text-pink-400" /> Loved by 100+ top
          businesses
        </SectionLabel>
      </div>
      <h2 className="mt-10 text-center font-medium tablet:text-5xl text-3xl leading-tight tracking-tight">
        The business growth
        <br />& success partner
      </h2>

      <p className="mt-10 laptop:w-8/12 tablet:w-9/12 text-pretty text-center text-foreground/60 leading-relaxed">
        Help you with more leads, sales, buyers, customers. We give you
        solutions to kickstart and grow your business
      </p>

      <div className="mt-16 flex tablet:flex-row flex-col items-center gap-4">
        <Button
          asChild
          className="hover:-translate-y-1 transition-all duration-300"
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
    </section>
  );
}
