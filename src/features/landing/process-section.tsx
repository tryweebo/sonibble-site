import { SectionLabel } from "@shared/components";
import * as motion from "motion/react-client";

type Process = {
  label: string;
  title: string;
  desc: string;
};

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
];

function ProcessItem({ process }: { process: Process }) {
  const { label, title, desc } = process;

  return (
    <div className="hover:-translate-y-2 group flex cursor-pointer flex-col rounded-2xl bg-surface p-4 transition-all duration-300">
      <div className="relative flex">
        <span className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 font-medium text-sm transition-all duration-300">
          <i className="fi fi-sc-check-circle" />
          {label}
        </span>

        <i className="fi fi-sr-bullet -right-2 -top-2 absolute text-foreground/50 text-lg" />
      </div>

      <h3 className="mt-3 text-pretty font-bricolage font-medium text-lg">
        {title}
      </h3>

      <p className="mt-5 text-pretty text-foreground/60 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export function ProcessSection() {
  return (
    <motion.section
      className="flex flex-col items-center py-28"
      id="how-it-works"
      initial={{ opacity: 0, y: 200 }}
      transition={{
        type: "spring",
        damping: 8,
        stiffness: 60,
        ease: "easeInOut",
        duration: 1.2,
      }}
      viewport={{ once: true, margin: "0% 0% -30% 0%" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center">
        <SectionLabel>How it works</SectionLabel>
      </div>
      <h2 className="mt-10 text-center font-medium tablet:text-5xl text-3xl leading-tight tracking-tight">
        Simple strategy to
        <br />
        win the game
      </h2>

      <p className="mt-10 laptop:w-8/12 tablet:w-9/12 text-pretty text-center text-foreground/60 leading-relaxed">
        We'll go with a 4-step plan. We’ll handle the details, so you can enjoy
        a smooth ride to your new website
      </p>

      <div className="mt-28 flex w-full justify-center">
        <div className="flex laptop:w-8/12 tablet:w-10/12 flex-col gap-4">
          {processes.map((process, i) => (
            <ProcessItem key={i} process={process} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
