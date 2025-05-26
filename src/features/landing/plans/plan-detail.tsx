import { Dialog, DialogContent, DialogTrigger } from "@shared/components"
import * as React from "react"

export function PlanDetail(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="text-sm cursor-pointer font-bricolage text-foreground font-medium transition-all duration-300">
          See details
        </span>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col">
          <h3 className="text-xl font-medium font-bricolage leading-tight text-pretty">
            Plans details
          </h3>

          <p className="text-foreground/60 mt-6 text-pretty leading-relaxed">
            You need to know how we work and how the plans and pricing actualy
            make you easy to moving and understand.
          </p>

          <p className="text-foreground/60 mt-6 text-pretty leading-relaxed">
            Steps:
          </p>

          <ul className="flex flex-col gap-2 mt-3">
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground cursor-pointer">
              1. Pick a plan
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground cursor-pointer">
              2. Quick meeting
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground cursor-pointer">
              3. Quick setup
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground cursor-pointer">
              4. Seamless delivery
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
