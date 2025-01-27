import { SectionLabel } from '@shared/components'
import * as React from 'react'

export function ProcessSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-10">
      <div className="flex items-center">
        <SectionLabel>How it works</SectionLabel>
      </div>
      <h2 className="text-6xl font-medium text-center leading-tight mt-10">
        Winning online presence
        <br />& build reputation
      </h2>

      <div className="grid grid-cols-2 gap-4 mt-24">
        <div className="flex flex-col col-span-1 p-4 py-6 rounded-2xl bg-green-100 border-2 border-green-300">
          <h3 className="text-lg">
            Start with branding and building your simple or custom website
          </h3>
        </div>

        <div className="flex flex-col col-span-1 p-4 py-6 rounded-2xl bg-pink-100 border-2 border-pink-300">
          <h3 className="text-lg">
            Support with design, tools, strategy & resources
          </h3>
        </div>

        <div className="flex flex-col col-span-1 p-4 py-6 rounded-2xl bg-orange-100 border-2 border-orange-300">
          <h3 className="text-lg">
            Maintain the website, online presence, tracks, & analysis
          </h3>
        </div>

        <div className="flex flex-col col-span-1 p-4 py-6 rounded-2xl bg-indigo-100 border-2 border-indigo-300">
          <h3 className="text-lg">
            Grow online, ads, campaign, newsletter, & generate leads
          </h3>
        </div>
      </div>
    </section>
  )
}
