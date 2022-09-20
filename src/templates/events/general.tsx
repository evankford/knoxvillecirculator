import React from "react";
import {SEO }from "../../components/Seo";
import { graphql, type PageProps, type HeadFC } from "gatsby"
import type {SingleEventQuery} from "../../../graphql-types";
import { toPlainText } from "@portabletext/react";

import imageUrlBuilder from "@sanity/image-url";
import client from "../../sanityClient";

const builder = imageUrlBuilder(client);

export const pageQuery= graphql<SingleEventQuery>`
 query SingleEvent($slug: String!) {
  sanityEvent(slug: {current: {eq: $slug}}){
  	eventDetails {
        date
        url
        location
        subtitle
        buttonText
        active
      }
      title
      _rawImage
      _rawBlurb
      _rawDescription
  }
}

`


const GeneralTemplate=({data } : PageProps<SingleEventQuery,{slug: string}>)=> {
  return(
    <h1>This is a page: {data.sanityEvent?.title}</h1>
  )
}

export default GeneralTemplate;

export const Head:HeadFC<SingleEventQuery>= ({data, location}) =>{
  let img: string | undefined ;
  if (data.sanityEvent?._rawImage){
    img =builder.image(data.sanityEvent?._rawImage).width(1600).height(900).crop('center').url();
  }
  return (
    <SEO title={data.sanityEvent?.title} image={img} description={data.sanityEvent?._rawDescription ? toPlainText(data.sanityEvent?._rawDescription) : false} pathname={location.pathname}/>
  )
}