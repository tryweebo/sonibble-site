import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  SectionLabel,
} from '@shared/components'
import * as React from 'react'

type FAQ = {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'How moch it cost for a website?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    question: 'How moch it cost for a website?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

function FAQItem({ faq, id }: { faq: FAQ; id: string }): React.ReactElement {
  const { question, answer } = faq
  return (
    <AccordionItem value={`faq-${id}`}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}

export function FAQSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-20" id="faqs">
      <div className="flex items-center">
        <SectionLabel>FAQs</SectionLabel>
      </div>
      <h2 className="text-4xl font-semibold text-center leading-tight mt-10 font-bricolage">
        Most asked
        <br />
        questions
      </h2>

      <div className="flex flex-col items-center mt-16 w-full">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col tablet:w-10/12 laptop:w-8/12 gap-3"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} id={index.toString()} />
          ))}
        </Accordion>
      </div>
    </section>
  )
}
