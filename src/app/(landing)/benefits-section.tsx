import { SectionLabel } from '@shared/components'
import * as React from 'react'
import * as motion from 'motion/react-client'

export function BenefitsSection(): React.ReactElement {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        damping: 8,
        stiffness: 60,
        ease: 'easeInOut',
        duration: '1.2',
      }}
      viewport={{ once: true, margin: '0% 0% -30% 0%' }}
      className="flex flex-col items-center py-28"
      id="benefits"
    >
      <div className="flex items-center">
        <SectionLabel>Why choose us</SectionLabel>
      </div>
      <h2 className="text-3xl tablet:text-5xl font-bold text-center leading-tight tracking-tight mt-10 font-bricolage">
        Lift up profits
        <br />
        with no headache
      </h2>

      <p className="text-foreground/60 mt-10 text-center tablet:w-9/12 laptop:w-8/12 leading-relaxed text-pretty">
        We helping for your growth
        <br />
        not to make you suffer
      </p>

      <div className="flex justify-center mt-48 w-full">
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:w-10/12">
          <div className="flex flex-col col-span-1 border border-border bg-surface rounded-2xl p-1 overflow-hidden tablet:rotate-12 -translate-y-20 transition-all duration-300 hover:scale-95 cursor-pointer group">
            <div className="flex flex-col border border-border overflow-hidden rounded-xl">
              <div className="flex border-b border-border relative w-full p-3 justify-center">
                <h3 className="font-medium text-center">Others.</h3>
                <span className="h-2 w-2 rounded-full bg-border absolute right-2 top-2 group-hover:bg-blue-500" />
              </div>
              <ul className="flex flex-col px-5 py-5 gap-3 text-foreground/60">
                <li className="flex gap-2">
                  <i className="fi fi-rr-cross-small" />
                  No result, no customers.
                </li>

                <li className="flex gap-2">
                  <i className="fi fi-rr-cross-small" />
                  Unresponsive freelancers and agencies
                </li>

                <li className="flex gap-2">
                  <i className="fi fi-rr-cross-small" />
                  Complicated process before starting your project
                </li>

                <li className="flex gap-2">
                  <i className="fi fi-rr-cross-small" />
                  Shocking hidden fees
                </li>

                <li className="flex gap-2">
                  <i className="fi fi-rr-cross-small" />
                  Low level of works
                </li>

                <li className="flex gap-2">
                  <i className="fi fi-rr-cross-small" />
                  Limited services to grow your business
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col col-span-1 border border-border bg-background rounded-2xl p-1 overflow-hidden tablet:-rotate-12 transition-all duration-300 hover:scale-105 hover:-translate-y-10 cursor-pointer group">
            <div className="flex flex-col border border-border overflow-hidden rounded-xl">
              <div className="flex border-b border-border relative w-full p-3 justify-center">
                <h3 className="font-medium text-center">Sonibble.</h3>

                <span className="h-2 w-2 rounded-full bg-border absolute right-2 top-2 group-hover:bg-blue-500" />
              </div>
              <ul className="flex flex-col px-5 py-5 gap-3">
                <li className="flex gap-2">
                  <i className="fi fi-sr-check-circle text-green-600" />
                  We speak ROI with proven strategy
                </li>

                <li className="flex gap-2">
                  <i className="fi fi-sr-check-circle text-green-600" />
                  Responsive teams and fast communication
                </li>

                <li className="flex gap-2">
                  <i className="fi fi-sr-check-circle text-green-600" />
                  Simple and streamline process
                </li>
                <li className="flex gap-2">
                  <i className="fi fi-sr-check-circle text-green-600" />
                  Transparent pricing & no hidden fees
                </li>
                <li className="flex gap-2">
                  <i className="fi fi-sr-check-circle text-green-600" />
                  World class works
                </li>

                <li className="flex gap-2">
                  <i className="fi fi-sr-check-circle text-green-600" />
                  All in services works for business
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
