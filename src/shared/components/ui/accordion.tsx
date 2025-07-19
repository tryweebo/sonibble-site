"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { mergeClass } from "@shared/libs"

const Accordion = AccordionPrimitive.Root

const AccordionItem = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Item
  > | null>
}) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={mergeClass(
      "flex flex-col p-2 bg-surface rounded-3xl",
      className,
    )}
    {...props}
  >
    <div className="p-3 rounded-2xl">{children}</div>
  </AccordionPrimitive.Item>
)
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Trigger
  > | null>
}) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={mergeClass(
        "flex flex-1 gap-3 items-center text-sm font-medium text-left justify-between transition-all duration-300 [&[data-state=open]>i]:rotate-180 cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
      <i className="fi fi-sr-plus-small text-lg transition-all duration-500" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Content
  > | null>
}) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm text-foreground/60 leading-6 transition-all duration-700"
    {...props}
  >
    <div className={mergeClass("py-4", className)}>{children}</div>
  </AccordionPrimitive.Content>
)

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
