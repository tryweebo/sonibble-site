'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

export function Header(): React.ReactElement {
  return (
    <header className="sticky z-30 top-4 inset-x-0 flex p-1 bg-surface rounded-full">
      <div className="flex items-center justify-between w-full h-full border-2 border-border border-dashed gap-10 rounded-full p-1">
        <Link
          href={'/'}
          className="flex items-center gap-3 transition-all duration-300"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-hidden rounded-full"
          >
            <rect width="512" height="512" rx="160" fill="#0D0915" />
            <path
              d="M363.072 328.003C358.347 340.712 350.821 352.239 340.926 361.924C331.03 371.61 318.957 379.265 305.397 384.452C291.838 389.639 277.056 392.258 261.896 392.157C246.737 392.057 231.496 389.24 217.045 383.867C202.594 378.494 189.215 370.67 177.672 360.842C166.129 351.015 156.648 339.376 149.77 326.59C142.893 313.804 138.754 300.121 137.589 286.323C136.424 272.525 138.257 258.883 142.982 246.173L253.027 287.088L363.072 328.003Z"
              fill="white"
            />
            <path
              d="M365.033 149.088C370.371 157.11 373.86 166.249 375.302 175.982C376.744 185.716 376.111 195.853 373.437 205.816C370.764 215.779 366.103 225.372 359.721 234.048C353.339 242.724 345.361 250.312 336.243 256.379C327.124 262.447 317.043 266.875 306.576 269.411C296.109 271.946 285.46 272.54 275.237 271.158C265.015 269.776 255.419 266.445 246.998 261.356C238.577 256.266 231.495 249.517 226.157 241.495L295.595 195.292L365.033 149.088Z"
              fill="white"
            />
            <circle cx="242.5" cy="149.895" r="21.5" fill="white" />
          </svg>
        </Link>

        <div className="flex relative z-10 gap-2">
          <Button
            asChild
            variant={'secondary'}
            className="transition-all duration-300"
          >
            <Link
              href={'https://cal.com/nyomansunima/sonibble-intro-call'}
              target="_blank"
            >
              Book a call
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
