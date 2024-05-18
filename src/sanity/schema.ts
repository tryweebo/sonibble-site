import { type SchemaTypeDefinition } from 'sanity'
import { workSchema } from './work'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [workSchema],
}
