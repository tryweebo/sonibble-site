import { Dialog, DialogContent, DialogTrigger } from "@shared/components";
import type * as React from "react";

export function PlanDetail(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="cursor-pointer font-bricolage font-medium text-foreground text-sm transition-all duration-300">
          See details
        </span>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col">
          <h3 className="text-pretty font-bricolage font-medium text-xl leading-tight">
            Plans details
          </h3>

          <p className="mt-6 text-pretty text-foreground/60 leading-relaxed">
            You need to know how we work and how the plans and pricing actualy
            make you easy to moving and understand.
          </p>

          <p className="mt-6 text-pretty text-foreground/60 leading-relaxed">
            Steps:
          </p>

          <ul className="mt-3 flex flex-col gap-2">
            <li className="flex cursor-pointer items-center gap-2 text-foreground transition-all duration-300">
              1. Pick a plan
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground transition-all duration-300">
              2. Quick meeting
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground transition-all duration-300">
              3. Quick setup
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground transition-all duration-300">
              4. Seamless delivery
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
