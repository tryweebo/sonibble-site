import { Dialog, DialogContent, DialogTrigger } from "@shared/components";
import type * as React from "react";

export function OptimizePlan(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:-translate-y-2 col-span-2 tablet:col-span-1 flex cursor-pointer flex-col rounded-3xl bg-surface p-2 transition-all duration-300">
          <div className="flex h-full w-full flex-col rounded-2xl p-4">
            <h2 className="text-pretty font-bricolage font-medium text-xl">
              Optimize
            </h2>

            <span className="mt-3 text-pretty font-bricolage font-medium text-2xl">
              <p className="font-normal font-sans text-foreground/40 text-sm">
                Starting at
              </p>
              $6,120/month
            </span>

            <p className="mt-5 text-pretty border-border border-t-2 border-dashed pt-5 text-foreground/60 leading-relaxed">
              Best for optimize the sales and leads to lift the profit
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col">
          <h3 className="text-pretty font-bricolage font-medium text-xl leading-tight">
            Optimize ($6,120/month)
          </h3>

          <p className="mt-6 text-pretty text-foreground/60 leading-relaxed">
            Times to optimize all of your resources and improve the strategies
            to win more leads and customers.
          </p>

          <ul className="mt-6 flex flex-col gap-2">
            <li className="flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
              <i className="fi fi-sr-bullet" />
              Everything in growth
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
              <i className="fi fi-sr-bullet" />
              Video & marketing design
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
              <i className="fi fi-sr-bullet" />
              Conversion & Optimization
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
              <i className="fi fi-sr-bullet" />
              Unlimited request
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
              <i className="fi fi-sr-bullet" />3 request at the time
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
              <i className="fi fi-sr-bullet" />
              Unlimited revisions
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
