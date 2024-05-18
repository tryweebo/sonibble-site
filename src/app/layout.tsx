import './globals.css'
import * as React from 'react'
import { cabinetGroteskFont, satoshiFont } from './fonts'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cabinetGroteskFont.variable} ${satoshiFont.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
