

import { defineType } from "sanity";

const generalSettings = defineType({
  type: 'document',
  name: "about",
  title:"About Circulator",
  fields: [
    {
      name: 'about',
      title: 'About Blurb',
      description: 'Shows on signup forms throughout the site, and as the blurb on social media.',
      type: 'array',
      of: [
        {type: 'block'}
      ]
    },
    {
      name: 'aboutFull',
      title: 'About Full',
      description: 'Shows on the about page. Should be a longer version of the above..',
      type: 'array',
      of: [
        {type: 'block'}
      ]
    },


  ]
})

export default generalSettings;