"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { mergeClass } from "@shared/libs";
import type * as React from "react";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Item
  > | null>;
}) => (
  <AccordionPrimitive.Item
    className={mergeClass(
      "flex flex-col rounded-3xl bg-surface p-2",
      className
    )}
    ref={ref}
    {...props}
  >
    <div className="rounded-2xl p-3">{children}</div>
  </AccordionPrimitive.Item>
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Trigger
  > | null>;
}) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={mergeClass(
        "flex flex-1 cursor-pointer items-center justify-between gap-3 text-left font-medium text-sm transition-all duration-300 [&[data-state=open]>i]:rotate-180",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      <i className="fi fi-sr-plus-small text-lg transition-all duration-500" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Content
  > | null>;
}) => (
  <AccordionPrimitive.Content
    className="overflow-hidden text-foreground/60 text-sm leading-6 transition-all duration-700"
    ref={ref}
    {...props}
  >
    <div className={mergeClass("py-4", className)}>{children}</div>
  </AccordionPrimitive.Content>
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
