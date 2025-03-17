import { SectionLabel } from '@shared/components'
import * as React from 'react'

export function BenefitsSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-20" id="benefits">
      <div className="flex items-center">
        <SectionLabel>Benefits</SectionLabel>
      </div>
      <h2 className="text-4xl font-semibold text-center leading-tight mt-10 font-bricolage">
        Because result
        <br />
        matters
      </h2>
    </section>
  )
}
