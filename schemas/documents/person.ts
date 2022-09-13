import { defineType } from "sanity";

import {BiUser} from "react-icons/bi"

const eventDocument = defineType({
  type: 'document',
  name: 'person',
  icon: BiUser,
  title: 'Person',
  fields: [
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
    }
  ]
})

export default eventDocument;