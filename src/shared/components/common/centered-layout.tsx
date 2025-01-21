import * as React from 'react'

type CenteredLayoutProps = {
  children: React.ReactNode
}

export function CenteredLayout({
  children,
}: CenteredLayoutProps): React.ReactElement {
  return (
    <div className="px-5 laptop:px-0 container mx-auto">
      <div className="mx-auto w-full tablet:w-11/12 laptop:w-9/12 desktop:w-6/12">
        {children}
      </div>
    </div>
  )
}
