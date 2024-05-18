/**
 * The configuration for the application
 * and all of the variables
 */
export const settings = {
  app: {
    host: process.env.NEXT_PUBLIC_APP_HOST!,
  },
  sanity: {
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-18',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    useCdn: false,
  },
}
