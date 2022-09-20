import { defineField } from "sanity";
import EventDetailsForm from "../components/eventDetailsForm";
const eventDetails = defineField({
  name:'eventDetails',
  title: 'Event Details',
  type: "array",
  of:[{type: 'singleEventDetail'} ],
  // components:{
  //   input: EventDetailsForm
  // },
})

export default eventDetails;