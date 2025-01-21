import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'

const openGraph: OpenGraph = {
  images: [
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1737091364296/0d31c055-5cf4-4a8b-a06d-a1d7d6a6b3c0.png',
  ],
  locale: 'en_US',
  type: 'website',
  siteName: 'Your Business Growth & Success Partner | Sonibble',
}

const twitter: Twitter = {
  images: [
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1737091364296/0d31c055-5cf4-4a8b-a06d-a1d7d6a6b3c0.png',
  ],
  card: 'summary_large_image',
  creator: '@nyomansunima',
  site: 'Your Business Growth & Success Partner | Sonibble',
}

export const sharedMetadata = {
  openGraph,
  twitter,
}
