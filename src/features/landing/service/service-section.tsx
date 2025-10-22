import { SectionLabel } from "@shared/components";
import type * as React from "react";
import { AutomationAIServiceItem } from "./automation-ai";
import { BrandingDesignServiceItem } from "./branding-design";
import { ConversionOptimizationServiceItem } from "./conversion-optimization";
import { GrowthMarketingServiceItem } from "./growth-marketing";
import { TimelineDetail } from "./timeline-dialog";
import { VideoMarketingServiceItem } from "./video-marketing";
import { WebDesignDevServiceItem } from "./web-design-dev";

export function ServiceSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-28" id="services">
      <div className="flex items-center">
        <SectionLabel>Services</SectionLabel>
      </div>
      <h2 className="mt-10 text-center font-medium tablet:text-5xl text-3xl leading-tight tracking-tight">
        We do all in
        <br />
        for your business
      </h2>

      <p className="mt-10 laptop:w-8/12 tablet:w-9/12 text-pretty text-center text-foreground/60 leading-relaxed">
        We focus on helping you grow
        <br />
        with all in one services.
      </p>

      <div className="mt-10 flex">
        <TimelineDetail />
      </div>

      <div className="mt-16 flex laptop:w-7/12 tablet:w-10/12 w-full flex-col justify-center gap-2">
        <WebDesignDevServiceItem />
        <BrandingDesignServiceItem />
        <VideoMarketingServiceItem />
        <ConversionOptimizationServiceItem />
        <AutomationAIServiceItem />
        <GrowthMarketingServiceItem />
      </div>
    </section>
  );
}
