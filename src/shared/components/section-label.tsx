import type * as React from "react";

type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({
  children,
}: SectionLabelProps): React.ReactElement {
  return (
    <div className="flex items-center gap-2 text-foreground/40 text-sm">
      {children}
    </div>
  );
}
