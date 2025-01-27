import * as React from 'react'

type CenteredLayoutProps = {
  children: React.ReactNode
}

export function CenteredLayout({
  children,
}: CenteredLayoutProps): React.ReactElement {
  return (
    <div className="px-5 laptop:px-0 container mx-auto">
      <div className="mx-auto w-full laptop:w-10/12 desktop:w-7/12">
        {children}
      </div>
    </div>
  )
}
