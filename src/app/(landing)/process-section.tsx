import { SectionLabel } from '@shared/components'
import * as React from 'react'
import * as motion from 'motion/react-client'

export function ProcessSection(): React.ReactElement {
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
      id="how-it-works"
    >
      <div className="flex items-center">
        <SectionLabel>How it works</SectionLabel>
      </div>
      <h2 className="text-3xl tablet:text-5xl font-bold text-center leading-tight tracking-tight mt-10 font-bricolage">
        Simple strategy to
        <br />
        win the game
      </h2>

      <p className="text-foreground/60 mt-10 text-center tablet:w-9/12 laptop:w-8/12 leading-relaxed text-pretty">
        We'll go with a 4-step plan. We’ll handle the details, so you can enjoy
        a smooth ride to your new website
      </p>

      <div className="flex justify-center w-full mt-28">
        <div className="grid grid-cols-1 gap-3 tablet:w-10/12 laptop:w-8/12">
          <div className="flex flex-col col-span-1 bg-surface border-2 border-border border-dashed rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 group hover:scale-105 -rotate-6 hover:-rotate-3">
            <div className="flex relative">
              <span className="flex items-center gap-1 pl-1 pr-3 py-1 rounded-full bg-gray-100 text-gray-500 text-sm font-medium transition-all duration-300 group-hover:bg-rose-100 group-hover:text-rose-500">
                <i className="fi fi-sr-bullet" />
                01. Kickstart
              </span>

              <i className="fi fi-sr-bullet absolute -right-2 -top-2 text-lg text-foreground/50" />
            </div>

            <h3 className="text-lg font-medium mt-3 text-pretty font-bricolage">
              Website & branding
            </h3>

            <p className="text-foreground/60 leading-relaxed mt-5 text-pretty">
              First, start with branding, logo and websites to run your
              business. Create your business online presence.
            </p>
          </div>
          <div className="flex flex-col col-span-1 bg-surface border-2 border-border border-dashed rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 group hover:scale-105 rotate-6 hover:rotate-3">
            <div className="flex relative">
              <span className="flex items-center gap-1 pl-1 pr-3 py-1 rounded-full bg-gray-100 text-gray-500 text-sm font-medium transition-all duration-300 group-hover:bg-rose-100 group-hover:text-rose-500">
                <i className="fi fi-sr-bullet" />
                02. Support
              </span>

              <i className="fi fi-sr-bullet absolute -right-2 -top-2 text-lg text-foreground/50" />
            </div>

            <h3 className="text-lg font-medium mt-3 text-pretty font-bricolage">
              Design, strategy & resources
            </h3>

            <p className="text-foreground/60 leading-relaxed mt-5 text-pretty">
              Next, wee need to support with design, pitch, newsletter, and
              resources.
            </p>
          </div>
          <div className="flex flex-col col-span-1 bg-surface border-2 border-border border-dashed rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 group hover:scale-105 -rotate-6 hover:-rotate-3">
            <div className="flex relative">
              <span className="flex items-center gap-1 pl-1 pr-3 py-1 rounded-full bg-gray-100 text-gray-500 text-sm font-medium transition-all duration-300 group-hover:bg-rose-100 group-hover:text-rose-500">
                <i className="fi fi-sr-bullet" />
                03. Maintain
              </span>

              <i className="fi fi-sr-bullet absolute -right-2 -top-2 text-lg text-foreground/50" />
            </div>

            <h3 className="text-lg font-medium mt-3 text-pretty font-bricolage">
              Maintain online presence
            </h3>

            <p className="text-foreground/60 leading-relaxed mt-5 text-pretty">
              So keep business on top of performance with tracking, analytics,
              review, and seo.
            </p>
          </div>
          <div className="flex flex-col col-span-1 bg-surface border-2 border-border border-dashed rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 group hover:scale-105 rotate-6 hover:rotate-3">
            <div className="flex relative">
              <span className="flex items-center gap-1 pl-1 pr-3 py-1 rounded-full bg-gray-100 text-gray-500 text-sm font-medium transition-all duration-300 group-hover:bg-rose-100 group-hover:text-rose-500">
                <i className="fi fi-sr-bullet" />
                04. Grow
              </span>

              <i className="fi fi-sr-bullet absolute -right-2 -top-2 text-lg text-foreground/50" />
            </div>

            <h3 className="text-lg font-medium mt-3 text-pretty font-bricolage">
              Grow online & audience
            </h3>

            <p className="text-foreground/60 leading-relaxed mt-5 text-pretty">
              Now, time grow your busienss bigger, start a content, ads,
              campaign, and audience growth.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
