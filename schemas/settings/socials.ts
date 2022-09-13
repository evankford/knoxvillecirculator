

import { defineType } from "sanity";

const socialSettings = defineType({
  type: 'document',
  name: "socials",
  title:"Social Settings",
  fields: [
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',

    },
    {
      name: 'tiktok',
      title: 'TikTok',
      type: 'url'
    },
    {
      name:'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      }
    }
  ]
})

export default socialSettings;