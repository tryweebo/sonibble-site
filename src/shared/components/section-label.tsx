import type * as React from "react";

type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({
  children,
}: SectionLabelProps): React.ReactElement {
  return (
    <div className="hover:-translate-y-1 flex cursor-pointer items-center gap-2 rounded-full px-3 py-[6px] font-medium text-foreground/60 text-sm transition-all duration-300">
      {children}
    </div>
  );
}
