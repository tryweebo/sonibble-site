import { Dialog, DialogContent, DialogTrigger } from '@shared/components'
import * as React from 'react'

export function TimelineDetail(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="text-sm cursor-pointer font-bricolage text-foreground/60 font-medium transition-all duration-300 hover:text-foreground">
          See timelines
        </span>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col">
          <h3 className="text-xl font-medium font-bricolage leading-tight text-pretty">
            Project Timelines
          </h3>

          <p className="text-foreground/60 mt-6 text-pretty leading-relaxed">
            Here are several project timelines to deliver. Please keep in mind
            that this timeline can be less or more than the prediction. Based on
            the client responsiveness and type of works.
          </p>

          <ul className="flex flex-col gap-2 mt-6">
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Websites: 1 - 4 weeks
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Design: 3 days - 2 weeks
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Video: 4 - 1 week
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Automation & AI integrations: 1 days - 1 week
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Conversion & optimization: 2 days - 2 weeks
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
