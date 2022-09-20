import { defineType } from "sanity";
import { orderRankField } from '@sanity/orderable-document-list';

import {BiUser} from "react-icons/bi"

const eventDocument = defineType({
  type: 'document',
  name: 'person',
  icon: BiUser,
  title: 'Person',
  fields: [
    orderRankField({type: 'person'}),
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: R=>R.required(),
    },
    {
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
    },
    {
      type: 'array',
      name: 'blurb',
      title: 'Blurb',
      of: [
         {
          type: 'block',
         }
      ]
    },
    {
      type: 'image',
      name: 'image',
      options: {
        hotspot: true
      }
    },
    {
      type: 'boolean',
      name: 'aboutFeatured',
      title: 'Feature in about section',
      initialValue: true,
    }
  ]
})

export default eventDocument;