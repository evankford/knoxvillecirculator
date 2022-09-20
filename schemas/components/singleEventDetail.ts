import { defineField } from "sanity";
const singleEventDetail = defineField({
  name:'singleEventDetail',
  title: 'Event Detail',
  type: "object",
  fields: [
    {
      name: 'active',
      type:'boolean'
    },
    {
      name: 'date',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'location',
      type: 'string',
    },
    {
      name: 'subtitle',
      type: 'string',
    },
    {
      title: 'Button text',
      name: 'buttonText',
      type: 'string',
    },
    {
      name: 'url',
      validation: Rule => Rule.required(),
      type: 'url',
    }
  ]
})

export default singleEventDetail;