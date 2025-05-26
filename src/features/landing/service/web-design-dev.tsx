import { Dialog, DialogContent, DialogTrigger } from "@shared/components"
import * as React from "react"

export function WebDesignDevServiceItem(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex p-1 bg-surface rounded-3xl col-span-1 relative cursor-pointer group transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center border-2 border-border border-dashed p-4 rounded-2xl w-full">
            <i className="fi fi-sr-bullet text-foreground/40 transition-all duration-300 group-hover:text-blue-500" />
            <h3 className="font-medium font-bricolage leading-tight text-pretty ml-3">
              Web design & development
            </h3>

            <i className="fi fi-br-qr-scan absolute right-4 opacity-0 inset-y-0 transition-all duration-300 group-hover:opacity-100 text-xs" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col">
          <h3 className="text-xl font-medium font-bricolage leading-tight text-pretty">
            Web design & development
          </h3>

          <p className="text-foreground/60 mt-6 text-pretty leading-relaxed">
            Helping you create a starter for business with website. We work,
            manage and doing all website work for you including:
          </p>

          <ul className="flex flex-col gap-2 mt-6">
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Redesign
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Migrations
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Audits
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Backups
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Landing Page
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Ecommerce
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Custom Websites
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Integrations
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Maintenance & Support
            </li>
          </ul>

          <p className="text-foreground mt-6 text-pretty leading-relaxed">
            Platforms:
          </p>

          <ul className="flex flex-col gap-2 mt-3">
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Framer
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              NextJs (Custom)
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Shopify
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
