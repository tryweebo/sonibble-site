import * as React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@shared/components'

export function StarterPlan(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col col-span-2 tablet:col-span-1 bg-surface rounded-3xl p-2 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:-rotate-6 hover:scale-105">
          <div className="flex flex-col p-4 border-2 border-border border-dashed rounded-2xl h-full w-full">
            <h2 className="text-xl font-medium text-pretty font-bricolage">
              Starter
            </h2>

            <span className="text-2xl font-medium mt-3 text-pretty font-bricolage">
              <p className="text-sm text-foreground/40 font-sans font-normal">
                Starting at
              </p>
              $1,250/month
            </span>

            <p className="text-foreground/60 leading-relaxed mt-5 pt-5 text-pretty border-t-2 border-border border-dashed">
              Perfect for starting your business, with several services
              included.
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col">
          <h3 className="text-xl font-medium font-bricolage leading-tight text-pretty">
            Starter ($1,250/month)
          </h3>

          <p className="text-foreground/60 mt-6 text-pretty leading-relaxed">
            Best for starting your business in early stage with included several
            services. This will help you kick start your business and start
            making money.
          </p>

          <ul className="flex flex-col gap-2 mt-6">
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Landing page / simple website
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Branding & logo
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Google search console
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Google my business
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Social media template
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Unlimited request
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              One request at the time
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              100x revisions
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
