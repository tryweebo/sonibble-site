import { Dialog, DialogContent, DialogTrigger } from "@shared/components"
import * as React from "react"

export function ConversionOptimizationServiceItem(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex p-1 bg-surface rounded-3xl col-span-1 relative cursor-pointer group transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center p-4 rounded-2xl w-full">
            <i className="fi fi-sc-check-circle" />
            <h3 className="font-medium font-bricolage leading-tight text-pretty ml-3">
              Conversion optimization
            </h3>

            <i className="fi fi-br-qr-scan absolute right-4 opacity-0 inset-y-0 transition-all duration-300 group-hover:opacity-100 text-xs" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col">
          <h3 className="text-xl font-medium font-bricolage leading-tight text-pretty">
            Conversion optimization
          </h3>

          <p className="text-foreground/60 mt-6 text-pretty leading-relaxed">
            Increase your performance and opportunity for better search result
            and increase leads, audiences and convert into loyal customers.
          </p>

          <ul className="flex flex-col gap-2 mt-6">
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Google my business
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              SEO
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Online reputation
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Strategies plan & development
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Lead magnet design
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Sales funnel design
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
