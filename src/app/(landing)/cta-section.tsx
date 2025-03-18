import { Button, SectionLabel } from '@shared/components'
import Link from 'next/link'
import * as React from 'react'
import * as motion from 'motion/react-client'

export function CTASection(): React.ReactElement {
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
      id="cta"
    >
      <div className="flex items-center">
        <SectionLabel>Get started</SectionLabel>
      </div>
      <h2 className="text-4xl font-semibold text-center leading-tight mt-10 font-bricolage">
        Quick spot
        <br />
        just for you
      </h2>

      <p className="text-foreground/50 mt-10 text-center tablet:w-8/12 laptop:w-9/12 leading-relaxed text-pretty">
        We offering limited spot to serve each months. Start now and enjoy the
        benefits of our services. Connect with us today!
      </p>

      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10">
        <span className="flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <i className="fi fi-sr-check-circle text-green-500" />
          No bullshit
        </span>
        <span className="flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <i className="fi fi-sr-check-circle text-green-500" />
          Quick meeting
        </span>
        <span className="flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <i className="fi fi-sr-check-circle text-green-500" />
          Perfect spot
        </span>
      </div>

      <div className="flex justify-center mt-16">
        <Button
          variant={'secondary'}
          size={'lg'}
          asChild
          className="transition-all duration-300 hover:-translate-y-2 hover:scale-95"
        >
          <Link
            href={'https://cal.com/nyomansunima/sonibble-intro-call'}
            target="_blank"
          >
            Book a call
            <i className="fi fi-br-video-camera-alt" />
          </Link>
        </Button>
      </div>
    </motion.section>
  )
}
