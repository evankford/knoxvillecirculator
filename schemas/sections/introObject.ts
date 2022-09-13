import { defineType } from "sanity";

const intro = defineType({
  type : "document",
  name: "object",
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

export default intro;