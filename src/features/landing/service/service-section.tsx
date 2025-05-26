import { SectionLabel } from "@shared/components"
import * as React from "react"
import * as motion from "motion/react-client"
import { WebDesignDevServiceItem } from "./web-design-dev"
import { BrandingDesignServiceItem } from "./branding-design"
import { VideoMarketingServiceItem } from "./video-marketing"
import { GrowthMarketingServiceItem } from "./growth-marketing"
import { AutomationAIServiceItem } from "./automation-ai"
import { ConversionOptimizationServiceItem } from "./conversion-optimization"
import { TimelineDetail } from "./timeline-dialog"

export function ServiceSection(): React.ReactElement {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 8,
        stiffness: 60,
        ease: "easeInOut",
        duration: "1.2",
      }}
      viewport={{ once: true, margin: "0% 0% -30% 0%" }}
      className="flex flex-col items-center py-28"
      id="services"
    >
      <div className="flex items-center">
        <SectionLabel>Services</SectionLabel>
      </div>
      <h2 className="text-3xl tablet:text-5xl font-bold text-center leading-tight tracking-tight mt-10 font-bricolage">
        We do all in
        <br />
        for your business
      </h2>

      <p className="text-foreground/60 mt-10 text-center tablet:w-9/12 laptop:w-8/12 leading-relaxed text-pretty">
        We focus on helping you grow
        <br />
        with all in one services.
      </p>

      <div className="flex mt-10">
        <TimelineDetail />
      </div>

      <div className="flex flex-col gap-2 justify-center w-full tablet:w-10/12 laptop:w-7/12 mt-16">
        <WebDesignDevServiceItem />
        <BrandingDesignServiceItem />
        <VideoMarketingServiceItem />
        <ConversionOptimizationServiceItem />
        <AutomationAIServiceItem />
        <GrowthMarketingServiceItem />
      </div>
    </motion.section>
  )
}
