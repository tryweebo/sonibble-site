import { SectionLabel } from "@shared/components";
import * as motion from "motion/react-client";

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
];

function MissionItem({ mission }: { mission: string }) {
  return (
    <li className="flex cursor-pointer items-center gap-2 text-foreground transition-all duration-300">
      <i className="fi fi-sc-check-circle" />
      {mission}
    </li>
  );
}

export function MissionSection() {
  return (
    <motion.section
      className="flex flex-col items-center py-28"
      id="mission"
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
        <SectionLabel>Mission</SectionLabel>
      </div>
      <h2 className="mt-10 text-center font-medium tablet:text-5xl text-3xl leading-tight tracking-tight">
        We love results
        <br />
        not bloated costs
      </h2>

      <p className="mt-10 laptop:w-8/12 tablet:w-9/12 text-pretty text-center text-foreground/60 leading-relaxed">
        We could bore you with a long list of perks,
        <br />
        but here are the key takeaways:
      </p>

      <div className="mt-16 flex w-full justify-center">
        <ul className="flex flex-col gap-4">
          {missions.map((mission, index) => (
            <MissionItem key={index} mission={mission} />
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
