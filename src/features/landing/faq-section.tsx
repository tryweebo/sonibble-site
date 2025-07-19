import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  SectionLabel,
} from "@shared/components"
import * as React from "react"
import * as motion from "motion/react-client"

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "How moch it cost for a website?",
    answer:
      "It's depend on your own picked plan. If you pick a custom work you will likely cost around $500 - $1200",
  },
  {
    question: "What if I want a fixed price quote?",
    answer:
      "If you are looking for a more traditional scoping method with specific timeframes, we do those too! Schedule a call and we'll run through the requirements together.",
  },
  {
    question: "Why not hire a freelancer?",
    answer:
      "With us you have access to a full team with a variety of skills. These can be design, Webflow development, Javascript development, SEO and more. You would need to hire multiple freelancers to have the same level of expertise.",
  },
  {
    question: "Who is it for?",
    answer:
      "We work with both startups and enterprises. Subscriptions work best with companies that have regular work, these can be creating new pages, adding features, ongoing redesigns and regular marketing campaigns.",
  },
  {
    question: "What can we work on?",
    answer:
      "Depending on the plan, the hours can be used on whatever you need at the time, it can be design, development, auditing, UX, training, you name it! We are here to help your company grow and make sure your digital campaigns go smoothly.",
  },
]

function FAQItem({ faq, id }: { faq: FAQ; id: string }): React.ReactElement {
  const { question, answer } = faq
  return (
    <AccordionItem
      value={`faq-${id}`}
      className="transition-all duration-300 hover:-translate-y-1"
    >
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}

export function FAQSection(): React.ReactElement {
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
      id="faqs"
    >
      <div className="flex items-center">
        <SectionLabel>FAQs</SectionLabel>
      </div>
      <h2 className="text-3xl tablet:text-5xl font-medium text-center leading-tight tracking-tight mt-10">
        Most asked
        <br />
        questions
      </h2>

      <p className="text-foreground/60 mt-10 text-center tablet:w-9/12 laptop:w-8/12 leading-relaxed text-pretty">
        Got questions?
        <br />
        We’ve got the answers
      </p>

      <div className="flex flex-col items-center mt-16 w-full">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col w-full tablet:w-10/12 laptop:w-8/12 gap-2"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} id={index.toString()} />
          ))}
        </Accordion>
      </div>
    </motion.section>
  )
}
