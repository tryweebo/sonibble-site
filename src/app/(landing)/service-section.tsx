import { SectionLabel } from '@shared/components'
import * as React from 'react'
import * as motion from 'motion/react-client'

const services = [
  'Web Design & Development',
  'Branding & Logo Design',
  'Digital Marketing',
  'SEO & Content',
  'Redesign',
  'Audits',
  'Migrations',
  'Copywriting',
  'Strategies',
  'Analytics',
  'Design',
  'Social Media',
  'Online Reputation',
]

function ServiceItem({ service }: { service: string }): React.ReactElement {
  return (
    <span className="px-6 py-4 rounded-full bg-surface font-medium text-sm text-foreground/70 transition-all duration-300 hover:-translate-y-2 hover:text-foreground cursor-pointer">
      {service}
    </span>
  )
}

export function ServiceSection(): React.ReactElement {
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
      id="services"
    >
      <div className="flex items-center">
        <SectionLabel>Services</SectionLabel>
      </div>
      <h2 className="text-4xl font-semibold text-center leading-tight mt-10 font-bricolage">
        We do all in
        <br />
        for your business
      </h2>

      <div className="flex flex-wrap justify-center gap-3 w-full mt-16">
        {services.map((service) => (
          <ServiceItem key={service} service={service} />
        ))}
      </div>
    </motion.section>
  )
}
