import { type SchemaTypeDefinition } from 'sanity'
import { categories } from '../schema/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categories],
}
