'use client'

import * as React from 'react'

type PageTransitionProps = {
  children: React.ReactNode
}

export function PageTransition({
  children,
}: PageTransitionProps): React.ReactElement {
  return (
    <div className="animate-in fade-in-0 slide-in-from-bottom-36 duration-700">
      {children}
    </div>
  )
}
