import * as React from 'react'
import type { Metadata } from 'next'
import '@shared/styles/globals.css'
import { config, sharedMetadata } from '@shared/libs'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { ThemeProvider, PosthogProvider } from '@shared/providers'
import { Footer, Header, Toaster, CenteredLayout } from '@shared/components'
import { fonts } from '@shared/fonts'

export const metadata: Metadata = {
  title: 'Your Business Growth & Success Partner | Sonibble',
  description:
    'We help small business, startups, and professional grow, scale & win the game',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Your Business Growth & Success Partner | Sonibble',
    description:
      'We help small business, startups, and professional grow, scale & win the game',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Your Business Growth & Success Partner | Sonibble',
    description:
      'We help small business, startups, and professional grow, scale & win the game',
  },
  applicationName: 'Your Business Growth & Success Partner | Sonibble',
  keywords: [
    'Web Designer',
    'Landing Page',
    'SEO',
    'Growth Partner',
    'Marketing Agency',
    'Web Design Agency',
  ],
  authors: [
    { name: 'Nyoman Sunima', url: 'https://www.nyomansunima.one' },
    { name: 'Weebo', url: 'https://www.tryweeboo.one' },
  ],
  publisher: 'Nyoman Sunima',
  creator: 'Nyoman Sunima',
  metadataBase: new URL(config.app.host),
  verification: {
    google: config.verification.google,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fonts.figtree.variable}`}
    >
      <PosthogProvider>
        <body suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
          >
            <CenteredLayout>
              <Header />
              <main className="min-h-screen tablet:pt-16 pb-28 tablet:pb-56">
                {children}
              </main>
              <Footer />
            </CenteredLayout>

            <Toaster />
          </ThemeProvider>

          <VercelAnalytics />
        </body>
      </PosthogProvider>
    </html>
  )
}
