import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { zhHantLocale } from '@sanity/locale-zh-hant'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'gopher-wood-cms',

  projectId: 'iq5wgtme',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), zhHantLocale()],

  schema: {
    types: schemaTypes,
  },
})
