import { SectionLabel } from "@shared/components"
import * as motion from "motion/react-client"

interface Process {
  label: string
  title: string
  desc: string
}

const processes: Process[] = [
  {
    label: "01. Kickstart",
    title: "Website & branding",
    desc: "First, start with branding, logo and websites to run your business. Create your business online presence.",
  },
  {
    label: "02. Support",
    title: "Design, strategy & resources",
    desc: "Next, wee need to support with design, pitch, newsletter, and resources.",
  },
  {
    label: "03. Maintain",
    title: "Maintain online presence",
    desc: "So keep business on top of performance with tracking, analytics, review, and seo.",
  },
  {
    label: "04. Grow",
    title: "Grow online & audience",
    desc: " Now, time grow your busienss bigger, start a content, ads, campaign, and audience growth.",
  },
]

function ProcessItem({ process }: { process: Process }) {
  const { label, title, desc } = process

  return (
    <div className="flex flex-col bg-surface rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 group">
      <div className="flex relative">
        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-sm font-medium transition-all duration-300">
          <i className="fi fi-sc-check-circle" />
          {label}
        </span>

        <i className="fi fi-sr-bullet absolute -right-2 -top-2 text-lg text-foreground/50" />
      </div>

      <h3 className="text-lg font-medium mt-3 text-pretty font-bricolage">
        {title}
      </h3>

      <p className="text-foreground/60 leading-relaxed mt-5 text-pretty">
        {desc}
      </p>
    </div>
  )
}

export function ProcessSection() {
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
      id="how-it-works"
    >
      <div className="flex items-center">
        <SectionLabel>How it works</SectionLabel>
      </div>
      <h2 className="text-3xl tablet:text-5xl font-medium text-center leading-tight tracking-tight mt-10">
        Simple strategy to
        <br />
        win the game
      </h2>

      <p className="text-foreground/60 mt-10 text-center tablet:w-9/12 laptop:w-8/12 leading-relaxed text-pretty">
        We'll go with a 4-step plan. We’ll handle the details, so you can enjoy
        a smooth ride to your new website
      </p>

      <div className="flex justify-center w-full mt-28">
        <div className="flex flex-col gap-4 tablet:w-10/12 laptop:w-8/12">
          {processes.map((process, i) => (
            <ProcessItem key={i} process={process} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
