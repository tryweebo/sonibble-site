import { Button, SectionLabel } from "@shared/components"
import { Link } from "react-router"
import * as React from "react"

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center pb-28" id="hero">
      <div className="flex items-center">
        <SectionLabel>
          <i className="fi fi-sr-heart text-pink-400" /> Loved by 100+ top
          businesses
        </SectionLabel>
      </div>
      <h2 className="text-3xl tablet:text-5xl font-medium text-center leading-tight tracking-tight mt-10">
        Your business growth
        <br />& success partner
      </h2>

      <p className="text-foreground/60 mt-10 text-center tablet:w-9/12 laptop:w-8/12 leading-relaxed text-pretty">
        Help you with more leads, sales, buyers, customers. We give you
        solutions to kickstart and grow your business
      </p>

      <span className="flex items-center gap-2 justify-center mt-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <i className="fi fi-sr-star text-pink-500" key={index} />
        ))}
      </span>

      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10">
        <span className="flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <i className="fi fi-sc-check-circle text-green-500" />
          Transparent
        </span>
        <span className="flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <i className="fi fi-sc-check-circle text-green-500" />
          ROI based
        </span>
        <span className="flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <i className="fi fi-sc-check-circle text-green-500" />
          Trusted partner
        </span>
      </div>

      <div className="flex flex-col tablet:flex-row items-center gap-4 mt-16">
        <Button
          size={"md"}
          variant={"primary"}
          asChild
          className="transition-all duration-300 hover:-translate-y-1"
        >
          <Link
            to={"https://cal.com/nyomansunima/sonibble-intro-call"}
            target="_blank"
          >
            Book a call
            <i className="fi fi-sc-check-circle" />
          </Link>
        </Button>
        <Button
          size={"md"}
          variant={"secondary"}
          asChild
          className="transition-all duration-300 hover:-translate-y-1"
        >
          <Link to={"/#plans"}>
            See plans
            <i className="fi fi-sc-heart" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
