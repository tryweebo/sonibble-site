'use client'

import Link from 'next/link'
import { StrokeLineBackground } from '~/components/common/bg'
import { ArrowRightIcon } from '~/components/icon'
import { Button } from '~/components/ui/button'

export default function Hero(): Readonly<React.ReactElement> {
  return (
    <section className="relative">
      <div className="absolute justify-center flex inset-x-0">
        <StrokeLineBackground />
      </div>

      <div className="px-5 laptop:px-0 container mx-auto py-36 laptop:py-48 relative">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl laptop:text-7xl !leading-tight font-medium font-heading desktop:w-10/12 text-center">
            We help small business, startups, and professional grow, scale &
            <br />
            win the game
          </h2>
          <p className="text-lg font-medium leading-relaxed desktop:w-5/12 mt-14 text-center">
            Your growth partner for your business, help you create better
            experience, more leads, sales, buyers, customers for your business.
            We give you solutions and grow your business together.
          </p>

          <div className="flex flex-col tablet:flex-row mt-14 gap-5 laptop:gap-16">
            <Button
              asChild
              className="transition-all duration-700 hover:translate-x-2"
            >
              <Link
                href={
                  'https://cal.com/nyomansunima/discovery-call-with-nyoman-sunima-sonibble'
                }
                target="_blank"
              >
                Book Free Strategy Call
                <ArrowRightIcon className="stroke-white" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
