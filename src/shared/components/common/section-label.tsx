import * as React from 'react'

type SectionLabelProps = {
  children: React.ReactNode
}

export function SectionLabel({
  children,
}: SectionLabelProps): React.ReactElement {
  return (
    <div className="flex p-[2px] border border-border rounded-full">
      <span className="text-foreground/60 border border-border rounded-full px-3 py-1 text-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-foreground">
        {children}
      </span>
    </div>
  )
}
