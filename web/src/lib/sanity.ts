import { createClient } from '@sanity/client';

export const projectId = import.meta.env.SANITY_PROJECT_ID || 'guwsuxij';
export const dataset = import.meta.env.SANITY_DATASET || 'production';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2025-01-01',
  useCdn: true,
});
