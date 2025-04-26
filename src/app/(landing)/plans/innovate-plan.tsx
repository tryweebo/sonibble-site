import * as React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@shared/components'

export function InnovatePlan(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col col-span-2 tablet:col-span-1 bg-surface rounded-3xl p-2 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:rotate-6 hover:scale-105">
          <div className="flex flex-col p-4 border-2 border-border border-dashed rounded-2xl h-full w-full">
            <h2 className="text-xl font-medium text-pretty font-bricolage">
              Innovate
            </h2>

            <span className="text-2xl font-medium mt-3 text-pretty font-bricolage">
              <p className="text-sm text-foreground/40 font-sans font-normal">
                Starting at
              </p>
              $8,000/month
            </span>

            <p className="text-foreground/60 leading-relaxed mt-5 pt-5 text-pretty border-t-2 border-border border-dashed">
              Start automate the process with ai & automations.
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col">
          <h3 className="text-xl font-medium font-bricolage leading-tight text-pretty">
            Innovate ($8,000/month)
          </h3>

          <p className="text-foreground/60 mt-6 text-pretty leading-relaxed">
            Automate your business work with good system, workflow and AI
            integrations.
          </p>

          <ul className="flex flex-col gap-2 mt-6">
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Everything in optimize
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Automation & AI solutions
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Ads & marketing
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Unlimited request
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />4 request at the time
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Unlimited revisions
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
