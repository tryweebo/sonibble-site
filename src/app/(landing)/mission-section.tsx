import { SectionLabel } from '@shared/components'
import * as React from 'react'
import * as motion from 'motion/react-client'

type MissionData = {
  icon: string
  label: string
}

const missions: MissionData[] = [
  { icon: 'fi fi-br-infinity', label: 'Unlimited & flexible scaling' },
  { icon: 'fi fi-br-heart', label: 'Full ownership & transparent' },
  { icon: 'fi fi-br-globe', label: 'Years of experiences' },
  { icon: 'fi fi-br-running-track', label: 'Pause or cancel anytime' },
  { icon: 'fi fi-br-duration-alt', label: 'Rapid & reliable delivery' },
  { icon: 'fi fi-br-badge', label: 'Satisfaction guaranteed' },
  { icon: 'fi fi-br-heart-partner-handshake', label: 'Senior expert level' },
  { icon: 'fi fi-br-broken-chain-link-wrong', label: 'Seamless integrations' },
  { icon: 'fi fi-br-surprise', label: 'No cost surprises' },
  { icon: 'fi fi-br-crown', label: 'Result based performance' },
]

function MissionItem({
  mission,
}: {
  mission: MissionData
}): React.ReactElement {
  const { icon, label } = mission
  return (
    <li className="flex items-center gap-2 text-foreground transition-all duration-300 cursor-pointer">
      <i className="fi fi-sr-bullet" />
      <i className={`${icon} text-base`} />
      {label}
    </li>
  )
}

export function MissionSection(): React.ReactElement {
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
      id="mission"
    >
      <div className="flex items-center">
        <SectionLabel>Mission</SectionLabel>
      </div>
      <h2 className="text-3xl tablet:text-5xl font-bold text-center leading-tight tracking-tight mt-10 font-bricolage">
        We love results
        <br />
        not bloated costs
      </h2>

      <p className="text-foreground/60 mt-10 text-center tablet:w-9/12 laptop:w-8/12 leading-relaxed text-pretty">
        We could bore you with a long list of perks,
        <br />
        but here are the key takeaways:
      </p>

      <div className="flex justify-center w-full mt-16">
        <ul className="flex flex-col gap-4">
          {missions.map((mission, index) => (
            <MissionItem mission={mission} key={index} />
          ))}
        </ul>
      </div>
    </motion.section>
  )
}
