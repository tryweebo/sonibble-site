import * as React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@shared/components"

export function OptimizePlan(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col col-span-2 tablet:col-span-1 bg-surface rounded-3xl p-2 cursor-pointer transition-all duration-300 hover:-translate-y-2">
          <div className="flex flex-col p-4 rounded-2xl h-full w-full">
            <h2 className="text-xl font-medium text-pretty font-bricolage">
              Optimize
            </h2>

            <span className="text-2xl font-medium mt-3 text-pretty font-bricolage">
              <p className="text-sm text-foreground/40 font-sans font-normal">
                Starting at
              </p>
              $6,120/month
            </span>

            <p className="text-foreground/60 leading-relaxed mt-5 pt-5 text-pretty border-t-2 border-border border-dashed">
              Best for optimize the sales and leads to lift the profit
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col">
          <h3 className="text-xl font-medium font-bricolage leading-tight text-pretty">
            Optimize ($6,120/month)
          </h3>

          <p className="text-foreground/60 mt-6 text-pretty leading-relaxed">
            Times to optimize all of your resources and improve the strategies
            to win more leads and customers.
          </p>

          <ul className="flex flex-col gap-2 mt-6">
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Everything in growth
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Video & marketing design
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Conversion & Optimization
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Unlimited request
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />3 request at the time
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
