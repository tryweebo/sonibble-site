import { SectionLabel } from "@shared/components";
import type * as React from "react";

export function WorkSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-28" id="work">
      <div className="flex items-center">
        <SectionLabel>Works</SectionLabel>
      </div>
      <h2 className="mt-10 text-center font-bold font-bricolage text-5xl leading-tight tracking-tight">
        Our top
        <br />
        works
      </h2>

      <p className="mt-10 laptop:w-8/12 tablet:w-9/12 text-pretty text-center text-foreground/60 leading-relaxed">
        Help you with more leads, sales, buyers, customers. We give you
        solutions to kickstart and grow your business
      </p>

      <div className="mt-16 flex w-full justify-center" />
    </section>
  );
}
