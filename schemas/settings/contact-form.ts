import { defineType } from "sanity";

const contactFormSettings = defineType({
  type: 'document',
  name: "contactSettings",
  fields: [
    {
      name: 'disclaimer',
      type: 'array',
      of: [
        {type: 'block'}
      ]
    }
  ]
})

export default contactFormSettings;