import { SectionLabel } from "@shared/components";
import type * as React from "react";
import { CustomPlan } from "./custom-plan";
import { GrowthPlan } from "./growth-plan";
import { InnovatePlan } from "./innovate-plan";
import { OptimizePlan } from "./optimize-plan";
import { PlanDetail } from "./plan-detail";
import { StarterPlan } from "./starter-plan";

export function PlanSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-28" id="plans">
      <div className="flex items-center">
        <SectionLabel>Plans</SectionLabel>
      </div>
      <h2 className="mt-10 text-center font-medium tablet:text-5xl text-3xl leading-tight tracking-tight">
        Simple plans
        <br />
        to scale
      </h2>

      <p className="mt-10 laptop:w-8/12 tablet:w-9/12 text-pretty text-center text-foreground/60 leading-relaxed">
        No hidden fees, no bloating fees.
        <br />
        Let’s keep it simple!
      </p>

      <div className="mt-10 flex">
        <PlanDetail />
      </div>

      <div className="mt-16 flex w-full justify-center">
        <div className="grid laptop:w-10/12 grid-cols-2 gap-3">
          <CustomPlan />
          <StarterPlan />
          <GrowthPlan />
          <OptimizePlan />
          <InnovatePlan />
        </div>
      </div>
    </section>
  );
}
