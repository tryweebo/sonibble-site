import { createClient } from 'next-sanity'
import { settings } from './settings'
import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

const {
  sanity: { apiVersion, dataset, projectId, useCdn },
} = settings

/**
 * The sanity client to access all of the content from the
 * sanity lake content and cdn
 */
export const sanityClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

/**
 * The url and image builder for sanity content
 * @param source the source of url and image file url
 * @returns {string}
 */
export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}
