import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:"v2023-08-26",
  dataset:"production",
  projectId,
  useCdn,
})
