import Link from 'next/link'
import * as React from 'react'
import { Button } from '~/components/ui/button'
import { Nav } from '~/types/nav'

function BrandLogo(): Readonly<React.ReactElement> {
  return (
    <Link
      href={'/'}
      className="flex justify-center items-center transition-all duration-700 hover:scale-95 hover:-translate-y-2"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 299 337"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M256.072 240.003C251.347 252.712 243.821 264.239 233.926 273.924C224.03 283.61 211.957 291.265 198.397 296.452C184.838 301.639 170.056 304.258 154.896 304.157C139.737 304.057 124.496 301.24 110.045 295.867C95.5936 290.494 82.2145 282.67 70.6715 272.842C59.1286 263.015 49.6477 251.376 42.7704 238.59C35.893 225.804 31.7538 212.121 30.5891 198.323C29.4244 184.525 31.257 170.883 35.9823 158.173L146.027 199.088L256.072 240.003Z"
          fill="black"
        />
        <path
          d="M258.033 61.0878C263.371 69.1099 266.86 78.2487 268.302 87.9821C269.744 97.7156 269.111 107.853 266.437 117.816C263.764 127.779 259.103 137.372 252.721 146.048C246.339 154.724 238.361 162.312 229.243 168.379C220.124 174.447 210.043 178.875 199.576 181.411C189.109 183.946 178.46 184.54 168.237 183.158C158.015 181.776 148.419 178.445 139.998 173.356C131.577 168.266 124.495 161.517 119.157 153.495L188.595 107.292L258.033 61.0878Z"
          fill="black"
        />
        <circle cx="135.5" cy="61.895" r="21.5" fill="black" />
      </svg>
    </Link>
  )
}

function NavItem({ item }: { item: Nav }): React.ReactElement {
  return (
    <li className="flex items-center justify-center px-4 py-3 rounded-full bg-transparent cursor-pointer text-base font-medium transition-all duration-700 hover:bg-secondary hover:text-secondary-foreground leading-none">
      <Link href={item.path || '#'}>{item.label}</Link>
    </li>
  )
}

function Navs(): React.ReactElement {
  const list: Nav[] = [
    { label: 'Works', path: '/works' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="hidden laptop:flex items-center border border-border p-[6px] rounded-full bg-background">
      <ul className="flex items-center">
        {list.map((item, index) => (
          <NavItem item={item} key={index} />
        ))}
      </ul>
    </nav>
  )
}

export default function Header(): Readonly<React.ReactElement> {
  return (
    <header className="flex items-center px-5 laptop:px-16 py-3 fixed top-0 inset-x-0 justify-between z-50">
      <BrandLogo />
      <div className="flex items-center gap-16">
        <Navs />
        <Button
          asChild
          size={'sm'}
          className="transition-all duration-700 hover:scale-95"
        >
          <Link
            href={
              'https://cal.com/nyomansunima/discovery-call-with-nyoman-sunima-sonibble'
            }
            target="_blank"
          >
            Get started
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.2498 12H4.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M14.5901 17.66C14.5901 14.7503 17.1527 12 20.2502 12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M14.5901 6.33984C14.5901 9.24959 17.1527 11.9999 20.2502 11.9999"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </Link>
        </Button>
      </div>
    </header>
  )
}
