import { defineType } from "sanity";
import {BsCalendarEvent} from "react-icons/bs";
import { orderRankField } from '@sanity/orderable-document-list';

const eventDocument = defineType({
  type: 'document',
  name: 'event',
  icon: BsCalendarEvent,
  title: 'Event',
  fields: [
    orderRankField({type: 'person'}),
    {
      type: 'string',
      name: 'title',
      validation: R=>R.required(),
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
      type: 'eventDetails',
      name: 'eventDetails'
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
          },
          {
            title: "Cry Cleanse Flow",
            value: "cry-cleanse-flow"
          }
        ]
      }
    }
  ]
})

export default eventDocument;