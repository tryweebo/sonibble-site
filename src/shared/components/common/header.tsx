'use client'
import * as React from 'react'
import Link from 'next/link'
import { Logo } from './logo'
import { Button } from '../ui/button'

function Brand(): React.ReactElement {
  return (
    <Link
      href={'/'}
      className="flex items-center gap-3 transition-all duration-300 hover:-translate-x-1"
    >
      <Logo width={32} height={32} />
      <span className="font-medium">Sonibble</span>
    </Link>
  )
}

type NavItemProps = {
  href: string
  children: React.ReactNode
}

function Actions(): React.ReactElement {
  return (
    <div className="flex relative z-10 gap-2">
      <Button
        asChild
        className="transition-all duration-300 hover:-translate-y-1"
      >
        <Link
          href={
            'https://cal.com/nyomansunima/discovery-call-with-nyoman-sunima-sonibble'
          }
          target="_blank"
        >
          <i className="fi fi-br-bookmark" />
          Get started
        </Link>
      </Button>
    </div>
  )
}

export function Header(): React.ReactElement {
  return (
    <header className="flex items-center justify-between gap-10 h-24">
      <Brand />
      <Actions />
    </header>
  )
}
