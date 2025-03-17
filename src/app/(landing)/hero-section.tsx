import { Button, SectionLabel } from '@shared/components'
import Link from 'next/link'
import * as React from 'react'

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center pt-10 pb-20" id="hero">
      <div className="flex items-center">
        <SectionLabel>
          <i className="fi fi-sr-heart text-pink-400" /> Loved by 100+ top
          businesses
        </SectionLabel>
      </div>
      <h2 className="text-4xl font-semibold text-center leading-tight mt-10 font-bricolage">
        Growth business
        <br />
        kickstarter
      </h2>
      <p className="text-foreground/50 mt-10 text-center laptop:w-9/12 leading-relaxed text-pretty">
        Your growth partner for your business, help you with more leads, sales,
        buyers, customers for your business. We give you solutions and grow your
        business together.
      </p>
      <div className="flex items-center justify-center gap-x-8 gap-y-3 mt-10">
        <span className="flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <i className="fi fi-sr-check-circle text-green-500" />
          Trusted partner
        </span>
        <span className="flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <i className="fi fi-sr-check-circle text-green-500" />
          Transparent
        </span>
        <span className="flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <i className="fi fi-sr-check-circle text-green-500" />
          ROI based perfomance
        </span>
      </div>
      <div className="flex items-center gap-4 mt-16">
        <Button
          size={'lg'}
          variant={'primary'}
          asChild
          className="transition-all duration-300 hover:-translate-y-1 hover:scale-95"
        >
          <Link
            href={'https://cal.com/nyomansunima/sonibble-intro-call'}
            target="_blank"
          >
            Book free strategy call <i className="fi fi-rr-arrow-right" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
