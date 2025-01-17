import * as React from 'react'
import Link from 'next/link'
import { mergeClass } from '@shared/utils'

const footerMenus = [
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Terms of use', href: '/terms' },
  { label: 'FAQs', href: '/faqs' },
]

type MenuItemProps = {
  href: string
  children?: React.ReactNode
  className?: string
}

export function MenuItem({
  href,
  children,
  className,
}: MenuItemProps): React.ReactElement {
  return (
    <li
      className={`${mergeClass(
        'flex items-center justify-center text-sm p-1 rounded-xl bg-transparent transition-all hover:-translate-y-1 hover:text-foreground/60 duration-300',
        className,
      )}`}
    >
      <Link href={href} className="w-full h-full">
        {children}
      </Link>
    </li>
  )
}

export function FooterMenuList(): React.ReactElement {
  return (
    <div className="flex">
      <ul className="flex items-center gap-2">
        {footerMenus.map((item, index) => (
          <MenuItem key={index} href={item.href}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </div>
  )
}

export function Footer(): React.ReactElement {
  return (
    <footer className="flex flex-col" id="footer">
      <div className="flex flex-col tablet:flex-row tablet:items-center py-7 tablet:justify-between mt-8">
        <span className="text-sm cursor-pointer">
          Copyright &copy; 2024 - Alright Reserved
        </span>
        <FooterMenuList />
      </div>
    </footer>
  )
}
