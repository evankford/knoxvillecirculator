import { defineType } from "sanity";

const eventDocument = defineType({
  type: 'document',
  name: 'page',
  title: 'Page',
  fields: [
    {
      type: 'string',
      name: 'title',
      validation: R=>R.required(),
    }, {
      type: 'string',
      name: 'subtitle'
    },
    {
      type:'slug',
      name:'slug',
      options:{
        source:'title'
      },
      validation: R=>R.required()
    },
    {
      type: 'image',
      name:'image',
      validation: R=>R.required()
    },
    {
      type: 'array',
      name: 'blurb',
      title: 'Short Description',
      of: [
        {type: 'block'}
      ]
    },
    {
      type: 'array',
      name: 'description',
      title: 'Long Description',
      of: [
        {type: 'block'}
      ]
    },
    {
      type: 'string',
      name: 'template',
      title:  'Template',
      initialValue: 'general',
      options:{
        list: [
          {
            title: "General",
            value: "general"
          }
        ]
      }
    }
  ]
})

export default eventDocument;