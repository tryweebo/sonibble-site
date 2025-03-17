import * as React from 'react'

type SectionLabelProps = {
  children: React.ReactNode
}

export function SectionLabel({
  children,
}: SectionLabelProps): React.ReactElement {
  return (
    <div className="flex items-center gap-2 border border-border rounded-full px-3 py-[6px] text-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 font-bricolage text-foreground/60">
      {children}
    </div>
  )
}
