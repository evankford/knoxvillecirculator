

import { defineType } from "sanity";

const generalSettings = defineType({
  type: 'document',
  name: "eventSettings",
  title:"About Events",
  fields: [
    {
      name: 'blurb',
      title: 'Events Blurb',
      type: 'array',
      of: [
        {type: 'block'}
      ]
    },
    {
      name: 'description',
      title: 'Events Description',
      description: 'Shows on the about section. Should be a longer version of the above.',
      type: 'array',
      of: [
        {type: 'block'}
      ]
    },
  ]
})

export default generalSettings;