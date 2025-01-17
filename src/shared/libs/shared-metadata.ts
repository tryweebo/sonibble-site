import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'

const openGraph: OpenGraph = {
  images: ['YOUR_IMAGE_META_TAG'],
  locale: 'en_US',
  type: 'website',
  siteName: 'YOUR_WEBSITE_NAME',
}

const twitter: Twitter = {
  images: ['YOUR_IMAGE_META_TAG'],
  card: 'summary_large_image',
  creator: '@YOUR_TWITTER_HANDLE',
  site: 'YOUR_WEBSITE_NAME',
}

export const sharedMetadata = {
  openGraph,
  twitter,
}
