import { type SchemaTypeDefinition } from 'sanity'
import { product } from './lib/product'
import { productType } from './lib/productType'
import { category } from './lib/category'
import { size } from './lib/size'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,productType,category,size],
}
