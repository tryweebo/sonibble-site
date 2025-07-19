import { SectionLabel } from "@shared/components"
import * as motion from "motion/react-client"

const missions: string[] = [
  "Unlimited & flexible scaling",
  "Full ownership & transparent",
  "Years of experiences",
  "Pause or cancel anytime",
  "Rapid & reliable delivery",
  "Satisfaction guaranteed",
  "Senior expert level",
  "Seamless integrations",
  "No cost surprises",
  "Result based performance",
]

function MissionItem({ mission }: { mission: string }) {
  return (
    <li className="flex items-center gap-2 text-foreground transition-all duration-300 cursor-pointer">
      <i className="fi fi-sc-check-circle" />
      {mission}
    </li>
  )
}

export function MissionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 8,
        stiffness: 60,
        ease: "easeInOut",
        duration: 1.2,
      }}
      viewport={{ once: true, margin: "0% 0% -30% 0%" }}
      className="flex flex-col items-center py-28"
      id="mission"
    >
      <div className="flex items-center">
        <SectionLabel>Mission</SectionLabel>
      </div>
      <h2 className="text-3xl tablet:text-5xl font-medium text-center leading-tight tracking-tight mt-10">
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
