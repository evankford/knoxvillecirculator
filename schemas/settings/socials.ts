

import { defineType } from "sanity";

const socialSettings = defineType({
  type: 'document',
  name: "socialSettings",
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
      name: 'icon',
      title: 'Square Icon',
      description: 'Shows on browsers and emails.',
      type: 'image',
    },
    {
      name: 'image',
      title: 'Image',
      description: 'Shows on default share links and site previews',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
  ]
})

export default socialSettings;