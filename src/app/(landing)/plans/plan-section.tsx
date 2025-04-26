import { SectionLabel } from '@shared/components'
import * as React from 'react'
import * as motion from 'motion/react-client'
import { StarterPlan } from './starter-plan'
import { GrowthPlan } from './growth-plan'
import { OptimizePlan } from './optimize-plan'
import { InnovatePlan } from './innovate-plan'
import { CustomPlan } from './custom-plan'
import { PlanDetail } from './plan-detail'

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
      className="flex flex-col items-center py-28"
      id="plans"
    >
      <div className="flex items-center">
        <SectionLabel>Plans</SectionLabel>
      </div>
      <h2 className="text-3xl tablet:text-5xl font-bold text-center leading-tight tracking-tight mt-10 font-bricolage">
        Simple plans
        <br />
        to scale
      </h2>

      <p className="text-foreground/60 mt-10 text-center tablet:w-9/12 laptop:w-8/12 leading-relaxed text-pretty">
        No hidden fees, no bloating fees.
        <br />
        Let’s keep it simple!
      </p>

      <div className="flex mt-10">
        <PlanDetail />
      </div>

      <div className="flex w-full justify-center mt-16">
        <div className="grid grid-cols-2 gap-3 laptop:w-10/12">
          <CustomPlan />
          <StarterPlan />
          <GrowthPlan />
          <OptimizePlan />
          <InnovatePlan />
        </div>
      </div>
    </motion.section>
  )
}
