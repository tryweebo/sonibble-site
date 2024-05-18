import type { Metadata } from 'next'
import * as React from 'react'
import Footer from './footer'
import AnimationProvider from '~/components/provider/animation'
import { settings } from '~/lib/config/settings'
import Header from './header'

export const metadata: Metadata = {
  applicationName: 'Sonibble',
  keywords: [
    'Web Designer',
    'Landing Page',
    'SEO',
    'Growth Partner',
    'Marketing Agency',
    'Web Design Agency',
  ],
  authors: [{ name: 'Sonibble' }],
  publisher: 'Sonibble',
  creator: 'Sonibble',
  metadataBase: new URL(settings.app.host),
}

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AnimationProvider>
      <Header />
      {children}
      <Footer />
    </AnimationProvider>
  )
}
