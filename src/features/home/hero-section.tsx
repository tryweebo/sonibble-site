import { Button, SectionLabel } from '@shared/components'
import Link from 'next/link'
import * as React from 'react'

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-10">
      <div className="flex items-center">
        <SectionLabel>Business favorites ++</SectionLabel>
      </div>
      <h2 className="text-6xl font-medium text-center !leading-tight mt-10">
        Help business to grow
        <br className="hidden laptop:block" />
        scale & win the game
      </h2>
      <p className="text-foreground/60 mt-10 text-center laptop:w-9/12 leading-relaxed text-pretty">
        Your growth partner for your business, help you create better
        experience, more leads, sales, buyers, customers for your business. We
        give you solutions and grow your business together.
      </p>

      <div className="flex items-center gap-4 mt-16">
        <Button
          size={'lg'}
          variant={'outline'}
          asChild
          className="transition-all duration-300 hover:-translate-y-1"
        >
          <Link
            href={
              'https://cal.com/nyomansunima/discovery-call-with-nyoman-sunima-sonibble'
            }
            target="_blank"
          >
            Book free strategy call <i className="fi fi-rr-arrow-right" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
