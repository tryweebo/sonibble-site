import * as React from 'react'

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <h2 className="text-2xl text-pretty">
        We help you to build, support and scale your business
      </h2>

      <p className="text-foreground/60 mt-3">
        Your growth partner for your business, help you create better
        experience, more leads, sales, buyers, customers for your business. We
        give you solutions and grow your business together.
      </p>
    </section>
  )
}
