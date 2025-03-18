import { SectionLabel } from '@shared/components'
import * as React from 'react'
import * as motion from 'motion/react-client'

export function PlanSection(): React.ReactElement {
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
      className="flex flex-col items-center py-20"
      id="plans"
    >
      <div className="flex items-center">
        <SectionLabel>Plans</SectionLabel>
      </div>
      <h2 className="text-4xl font-semibold text-center leading-tight mt-10 font-bricolage">
        Clear & simple plans
        <br />
        No shits
      </h2>

      <div className="flex w-full justify-center mt-16">
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 laptop:w-10/12">
          <div className="flex flex-col col-span-2 bg-surface border-2 border-border rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 rotate-3 hover:rotate-6 hover:scale-105">
            <div className="flex">
              <span className="flex items-center gap-1 pl-1 pr-3 py-1 rounded-full bg-green-100 text-green-500 text-sm font-medium">
                <i className="fi fi-sr-bullet" />
                Project based
              </span>
            </div>

            <h3 className="text-lg font-medium mt-3 text-pretty font-bricolage">
              Custom
            </h3>

            <p className="text-foreground/60 leading-relaxed mt-5 text-balance">
              Only pay what you need and what you want for businesss help. Yuu
              can also customize your order for services.
            </p>
          </div>
          <div className="flex flex-col col-span-2 tablet:col-span-1 bg-surface border-2 border-border rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 -rotate-3 hover:-rotate-6 hover:scale-105">
            <div className="flex">
              <span className="flex items-center gap-1 pl-1 pr-3 py-1 rounded-full bg-blue-100 text-blue-500 text-sm font-medium">
                <i className="fi fi-sr-bullet" />
                Starter
              </span>
            </div>

            <h3 className="text-lg font-medium mt-3 text-pretty font-bricolage">
              $1,200/month
            </h3>

            <p className="text-foreground/60 leading-relaxed mt-5 text-pretty">
              Perfect for starting your business, with several services
              included.
            </p>
          </div>
          <div className="flex flex-col col-span-2 tablet:col-span-1 bg-surface border-2 border-border rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 rotate-3 hover:rotate-6 hover:scale-105">
            <div className="flex">
              <span className="flex items-center gap-1 pl-1 pr-3 py-1 rounded-full bg-green-100 text-green-500 text-sm font-medium">
                <i className="fi fi-sr-bullet" />
                Growth
              </span>
            </div>

            <h3 className="text-lg font-medium mt-3 text-pretty font-bricolage">
              $3200/month
            </h3>

            <p className="text-foreground/60 leading-relaxed mt-5 text-pretty">
              Ideal for growing businesses, with full services in each month.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
