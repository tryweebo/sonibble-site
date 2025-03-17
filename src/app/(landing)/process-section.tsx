import { SectionLabel } from '@shared/components'
import * as React from 'react'

export function ProcessSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-20" id="how-it-works">
      <div className="flex items-center">
        <SectionLabel>How it works</SectionLabel>
      </div>
      <h2 className="text-4xl font-semibold text-center leading-tight mt-10 font-bricolage">
        Simple strategy to
        <br />
        win the game
      </h2>

      <div className="flex flex-col w-full mt-16">
        <div className="grid grid-cols-2">
          <div className="flex flex-col col-span-1 bg-surface border-2 border-border rounded-2xl p-4">
            <div className="flex">
              <span className="flex items-center gap-1 pl-1 pr-3 py-1 rounded-full bg-blue-100 text-blue-500 text-sm font-medium">
                <i className="fi fi-sr-bullet" />
                01. Kickstart
              </span>
            </div>

            <h3 className="text-lg font-medium mt-3">Create Website</h3>

            <p className="text-foreground/60 leading-relaxed mt-5">
              Start with branding and building your simple or custom website
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
