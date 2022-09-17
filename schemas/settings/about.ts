
import {BiInfoCircle} from "react-icons/bi"

import { defineType } from "sanity";

const generalSettings = defineType({
  type: 'document',
  name: "aboutSettings",
  icon: BiInfoCircle,
  title:"About Circulator",
  fields: [
    {
      name:'title',
      title: 'About title',
      type: 'string',
      initialValue: 'What We Do',
      validation: (R)=>R.required().max(50),
    },
    {
      name: 'blurb',
      title: 'About Blurb',
      description: 'Shows on signup forms throughout the site, and as the blurb on social media.',
      type: 'array',
      of: [
        {type: 'block'}
      ]
    },
     {
      name: 'description',
      title: 'About Description',
      description: 'Shows on the about page/sections. Should be a longer version of the above..',
      type: 'array',
      of: [
        {type: 'block'}
      ]
    }
  ]
})

export default generalSettings;