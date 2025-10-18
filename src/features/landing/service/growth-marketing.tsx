import { Dialog, DialogContent, DialogTrigger } from "@shared/components";
import type * as React from "react";

export function GrowthMarketingServiceItem(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="group hover:-translate-y-1 relative col-span-1 flex cursor-pointer rounded-3xl bg-surface p-1 transition-all duration-300">
          <div className="flex w-full items-center rounded-2xl p-4">
            <i className="fi fi-sc-check-circle" />
            <h3 className="ml-2 text-pretty font-bricolage font-medium leading-tight">
              Growth & marketing
            </h3>

            <i className="fi fi-br-qr-scan absolute inset-y-0 right-4 text-xs opacity-0 transition-all duration-300 group-hover:opacity-100" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col">
          <h3 className="text-pretty font-bricolage font-medium text-xl leading-tight">
            Growth & marketing
          </h3>

          <p className="mt-6 text-pretty text-foreground/60 leading-relaxed">
            Start grow the busienss with ads and marketing. Some services
            including content and social media.
          </p>

          <ul className="mt-6 flex flex-col gap-2">
            <li className="flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
              <i className="fi fi-sr-bullet" />
              Newsletter setup
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
              <i className="fi fi-sr-bullet" />
              Creation setup
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
              <i className="fi fi-sr-bullet" />
              Social media setup
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
              <i className="fi fi-sr-bullet" />
              Marketing ads
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
