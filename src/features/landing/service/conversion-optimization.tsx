import { Dialog, DialogContent, DialogTrigger } from "@shared/components";
import type * as React from "react";

export function ConversionOptimizationServiceItem(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="group hover:-translate-y-1 relative col-span-1 flex cursor-pointer rounded-3xl bg-surface p-1 transition-all duration-300">
          <div className="flex w-full items-center rounded-2xl p-4">
            <i className="fi fi-sc-check-circle" />
            <h3 className="ml-3 text-pretty font-bricolage font-medium leading-tight">
              Conversion optimization
            </h3>

            <i className="fi fi-br-qr-scan absolute inset-y-0 right-4 text-xs opacity-0 transition-all duration-300 group-hover:opacity-100" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col">
          <h3 className="text-pretty font-bricolage font-medium text-xl leading-tight">
            Conversion optimization
          </h3>

          <p className="mt-6 text-pretty text-foreground/60 leading-relaxed">
            Increase your performance and opportunity for better search result
            and increase leads, audiences and convert into loyal customers.
          </p>

          <ul className="mt-6 flex flex-col gap-2">
            <li className="flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
              <i className="fi fi-sr-bullet" />
              Google my business
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
              <i className="fi fi-sr-bullet" />
              SEO
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
              <i className="fi fi-sr-bullet" />
              Online reputation
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
              <i className="fi fi-sr-bullet" />
              Strategies plan & development
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
              <i className="fi fi-sr-bullet" />
              Lead magnet design
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
              <i className="fi fi-sr-bullet" />
              Sales funnel design
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
