import { Dialog, DialogContent, DialogTrigger } from "@shared/components";
import type * as React from "react";

export function TimelineDetail(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="cursor-pointer font-bricolage font-medium text-sm transition-all duration-300">
          See timelines
        </span>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col">
          <h3 className="text-pretty font-bricolage font-medium text-xl leading-tight">
            Project Timelines
          </h3>

          <p className="mt-6 text-pretty text-foreground/60 leading-relaxed">
            Here are several project timelines to deliver. Please keep in mind
            that this timeline can be less or more than the prediction. Based on
            the client responsiveness and type of works.
          </p>

          <ul className="mt-6 flex flex-col gap-2">
            <li className="flex cursor-pointer items-center gap-2 text-foreground transition-all duration-300">
              <i className="fi fi-sr-bullet" />
              Websites: 1 - 4 weeks
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground transition-all duration-300">
              <i className="fi fi-sr-bullet" />
              Design: 3 days - 2 weeks
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground transition-all duration-300">
              <i className="fi fi-sr-bullet" />
              Video: 4 - 1 week
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground transition-all duration-300">
              <i className="fi fi-sr-bullet" />
              Automation & AI integrations: 1 days - 1 week
            </li>
            <li className="flex cursor-pointer items-center gap-2 text-foreground transition-all duration-300">
              <i className="fi fi-sr-bullet" />
              Conversion & optimization: 2 days - 2 weeks
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
