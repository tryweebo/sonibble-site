import { SectionLabel } from '@shared/components'
import * as React from 'react'
import * as motion from 'motion/react-client'

export function WorkSection(): React.ReactElement {
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
      id="work"
    >
      <div className="flex items-center">
        <SectionLabel>Works</SectionLabel>
      </div>
      <h2 className="text-5xl font-bold text-center leading-tight tracking-tight mt-10 font-bricolage">
        Our top
        <br />
        works
      </h2>

      <p className="text-foreground/60 mt-10 text-center tablet:w-9/12 laptop:w-8/12 leading-relaxed text-pretty">
        Help you with more leads, sales, buyers, customers. We give you
        solutions to kickstart and grow your business
      </p>

      <div className="flex justify-center w-full mt-16"></div>
    </motion.section>
  )
}
