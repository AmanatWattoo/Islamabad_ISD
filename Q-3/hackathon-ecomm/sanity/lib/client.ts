import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:"v2023-08-23",
  dataset:"production",
  projectId,
  useCdn,
})
