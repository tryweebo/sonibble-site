import { Dialog, DialogContent, DialogTrigger } from '@shared/components'
import * as React from 'react'

export function VideoMarketingServiceItem(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex p-1 bg-surface rounded-3xl col-span-1 relative cursor-pointer group transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center border-2 border-border border-dashed p-4 rounded-2xl w-full">
            <i className="fi fi-sr-bullet text-foreground/40 transition-all duration-300 group-hover:text-blue-500" />
            <h3 className="font-medium font-bricolage leading-tight text-pretty ml-3">
              Video & marketing design
            </h3>

            <i className="fi fi-br-qr-scan absolute right-4 opacity-0 inset-y-0 transition-all duration-300 group-hover:opacity-100 text-xs" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col">
          <h3 className="text-xl font-medium font-bricolage leading-tight text-pretty">
            Video & marketing design
          </h3>

          <p className="text-foreground/60 mt-6 text-pretty leading-relaxed">
            Video creation and all marketing related design
          </p>

          <ul className="flex flex-col gap-2 mt-6">
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Video creation
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Product demo
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Video editing
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              PPC creative design
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Infographic
            </li>
            <li className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet" />
              Video Ads
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
