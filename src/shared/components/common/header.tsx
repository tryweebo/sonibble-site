'use client'
import * as React from 'react'
import Link from 'next/link'
import { Logo } from './logo'
import { Button } from '../ui/button'

export function Header(): React.ReactElement {
  return (
    <header className="flex items-center justify-between gap-10 h-24">
      <Link
        href={'/'}
        className="flex items-center gap-3 transition-all duration-300 hover:-translate-x-1"
      >
        <Logo width={30} height={30} />
        <span className="font-medium font-bricolage">Sonibble.</span>
      </Link>

      <div className="flex relative z-10 gap-2">
        <Button
          asChild
          variant={'outline'}
          className="transition-all duration-300 hover:-translate-y-1"
        >
          <Link
            href={'https://cal.com/nyomansunima/sonibble-intro-call'}
            target="_blank"
          >
            Book a call
            <i className="fi fi-br-video-camera-alt" />
          </Link>
        </Button>
      </div>
    </header>
  )
}
