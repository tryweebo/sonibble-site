import * as React from "react"

interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({
  children,
}: SectionLabelProps): React.ReactElement {
  return (
    <div className="flex items-center gap-2 rounded-full px-3 py-[6px] text-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 font-medium text-foreground/60">
      {children}
    </div>
  )
}
