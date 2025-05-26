"use client"

import * as React from "react"
import { motion } from "motion/react"

type Testimonial = {
  name: string
  designation: string
  content: React.ReactNode
}

const testimonials: Testimonial[] = [
  {
    name: "Jonathan HSU",
    designation: "Senior Strategy at Velence Labs",
    content:
      "One of the reasons we picked sonibble in the first place was having the flexibility to be able to work on many various tasks and projects, thats the kind of support we needed rather than massive one off projects.",
  },
  {
    name: "Jacquelyn von Hardenburgh",
    designation: "VP Rusiness Strateoy & Onerations",
    content:
      "The process of working with sonibble is practically flawless. They are different from any freelance or project based agency that we've worked with in the past because they are extremely responsive, they can do anything and they just get it. It's almost like they can read our minds, they know what we want to include and they're always asking the right questions.",
  },
  {
    name: "Aaron Ganick",
    designation: "Chief Innovation Officer",
    content:
      "Working with sonibble has been like having an extension of our team. We had challenges around communicating technical concepts to non technical audiences and sonibble helped us bring that to life in website animations and graphically pleasing elements.",
  },
]

export function TestimonialList(): React.ReactElement {
  const CARD_OFFSET = 10
  const SCALE_FACTOR = 0.06
  let interval: any

  const [reviews, setReviews] = React.useState<Testimonial[]>(testimonials)

  React.useEffect(() => {
    startFlipping()

    return () => clearInterval(interval)
  }, [])

  const startFlipping = () => {
    interval = setInterval(() => {
      setReviews((prevCards: Testimonial[]) => {
        const newArray = [...prevCards]
        newArray.unshift(newArray.pop()!)
        return newArray
      })
    }, 5600)
  }

  return (
    <div className="relative h-72 w-full tablet:h-60 tablet:w-8/12">
      {reviews.map((review, index) => {
        return (
          <motion.div
            key={`testimonial-${index}`}
            className="absolute bg-surface h-60 w-full rounded-2xl p-4 shadow-xl border-2 border-border shadow-black/[0.1] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 cursor-pointer hover:rotate-6"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: reviews.length - index,
            }}
          >
            <div className="text-foreground/60 text-pretty leading-relaxed">
              "{review.content}"
            </div>
            <div>
              <p className="text-foreground font-medium">{review.name}</p>
              <p className="text-foreground/60 text-sm">{review.designation}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
