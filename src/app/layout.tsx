import * as React from 'react'
import type { Metadata } from 'next'
import '@shared/styles/globals.css'
import { config, sharedMetadata } from '@shared/libs'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { ThemeProvider, PosthogProvider } from '@shared/providers'
import { Footer, Header, Toaster, CenteredLayout } from '@shared/components'
import { fonts } from '@shared/fonts'

export const metadata: Metadata = {
  title: 'Nyoman Sunima',
  description:
    'Focused on crafting digital products, website, web app, mobile app to help business.',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Nyoman Sunima',
    description:
      'Focused on crafting digital products, website, web app, mobile app to help business.',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Nyoman Sunima',
    description:
      'Focused on crafting digital products, website, web app, mobile app to help business.',
  },
  applicationName: 'Nyoman Sunima',
  keywords: [
    'Product Designer',
    'UI UX Designer',
    'Web Designer',
    'Shopify Developer',
    'Web Developer',
    'Webflow Expert',
    'Framer Expert',
    'Squarespace',
    'Wix Developer',
    'Fullstack',
    'Mobile Developer',
    'Indie Hacker',
  ],
  authors: [{ name: 'Nyoman Sunima' }],
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
      className={`${fonts.inter.variable}`}
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
              <main className="min-h-screen pb-28 tablet:pb-56">
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
