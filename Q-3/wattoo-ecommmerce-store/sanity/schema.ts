import { type SchemaTypeDefinition } from 'sanity'
import { product } from './lib/product'
import { size } from './lib/size'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,size],
}
