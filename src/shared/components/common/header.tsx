'use client'
import * as React from 'react'
import Link from 'next/link'

export function Brand(): React.ReactElement {
  return (
    <div className="text-sm gap-3 flex relative z-10">
      <Link
        href={'/'}
        className="transition-all duration-300 hover:-translate-x-1"
      >
        <span className="font-medium">yourbrand.domain</span>
      </Link>
    </div>
  )
}

export function Actions(): React.ReactElement {
  return <div className="flex relative z-10 gap-2"></div>
}

export function Header(): React.ReactElement {
  return (
    <header className="flex items-center justify-between h-24 tablet:h-36">
      <Brand />
      <Actions />
    </header>
  )
}
