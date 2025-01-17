import { config } from '@shared/libs'
import { MetadataRoute } from 'next'

const BASE_URL = config.app.host

// TODO: Add your sitemap of your site here
// Please ensure that the url is correct
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date().toISOString(),
    },
  ]
}
