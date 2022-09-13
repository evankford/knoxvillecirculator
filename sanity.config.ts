import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import structure from './schemas/structure'
import {schemaTypes} from './schemas'

export default createConfig({
  name: 'default',
  title: 'Circulator',

  projectId: 'llb7r28p',
  dataset: 'production',

  plugins: [deskTool({
    structure
  })],

  schema: {
    types: schemaTypes,
  },
})
