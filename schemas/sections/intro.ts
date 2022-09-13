import { defineType } from "sanity";

const introSection = defineType({
  type : "document",
  name: "intro",
  title: "Intro",
  fields:[
    {
      name: "heading",
      type: "array",
      of: [
        {type: "block"}
      ]
    }
  ]
});

export default introSection;