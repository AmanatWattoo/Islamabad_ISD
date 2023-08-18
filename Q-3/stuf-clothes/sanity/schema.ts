import { type SchemaTypeDefinition } from 'sanity'
import { product } from './lib/product'
import { category } from './lib/category'
import { productType } from './lib/productType'
import { size } from './lib/size'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category, productType,size],
}
