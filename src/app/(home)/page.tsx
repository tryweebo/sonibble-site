import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'

export const metadata: Metadata = {
  title: 'YOUR_TITLE_META_TAG',
  description: 'YOUR_DESCRIPTION_META_TAG',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'YOUR_TITLE_META_TAG',
    description: 'YOUR_DESCRIPTION_META_TAG',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'YOUR_TITLE_META_TAG',
    description: 'YOUR_DESCRIPTION_META_TAG',
  },
}

export default function HomePage(): React.ReactElement {
  return (
    <div className="flex flex-col gap-10">
      {/* TODO: Importa all of your page section and detail component here */}
      {/* You can also import from the @features folder */}
    </div>
  )
}
