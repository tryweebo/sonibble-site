import { SectionLabel } from '@shared/components'
import * as React from 'react'

export function ServiceSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-20" id="services">
      <div className="flex items-center">
        <SectionLabel>Services</SectionLabel>
      </div>
      <h2 className="text-4xl font-semibold text-center leading-tight mt-10 font-bricolage">
        We do all in
        <br />
        for your business
      </h2>
    </section>
  )
}
