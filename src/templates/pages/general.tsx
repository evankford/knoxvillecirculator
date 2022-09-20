import React from "react";
import {SEO }from "../../components/Seo";
import { graphql, type PageProps } from "gatsby"
import type {SingleEventQuery} from "../../../graphql-types";

// export const pageQuery= graphql<SingleEventQuery>`
//  query SingleEvent($slug: String!) {
//   allSanityEvent(filter: { slug: {current: { eq: $slug } } }) {
//     nodes {

//       title
//       _rawImage
//       _rawContent
//       _rawDescription
//     }
//   }
// }
// `


export default function GeneralTemplate() {
  return(
    <h1>This is a page</h1>
  )
}


// export const Head = ({data:SingleEventQuery}) =>{
//   return (
//     <SEO title="" />
//   )
// }