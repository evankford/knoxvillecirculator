import { defineType } from "sanity";
import {BsCalendarEvent} from "react-icons/bs";

const eventDocument = defineType({
  type: 'document',
  name: 'event',
  icon: BsCalendarEvent,
  title: 'Event',
  fields: [
    {
      type: 'string',
      name: 'title',
      validation: R=>R.required(),
    },
    {
      type: 'url',
      name: 'eventbriteUrl',
      title: 'EventBrite URL',
    }
  ]
})

export default eventDocument;