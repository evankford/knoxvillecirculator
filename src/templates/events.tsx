import React, {useEffect, useState} from "react";
import {SEO }from "../components/Seo";
import { graphql, type PageProps, type HeadFC } from "gatsby"
import type {SingleEventQuery} from "../../graphql-types";
import { toPlainText } from "@portabletext/react";
import SectionOuter from "../components/layouts/SectionOuter";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import client from "../sanityClient";
import Layout from "../components/Layout";

import EventBanner from "../components/eventBanner";
const builder = imageUrlBuilder(client);

export const pageQuery= graphql<SingleEventQuery>`
 query SingleEvent($slug: String!) {
  sanityEvent(slug: {current: {eq: $slug}}){
  	eventDetails {
        date(formatString: "yyyy-MM-DD HH:mm")
        url
        location
        subtitle
        buttonText
        active
      }
      featured
      title
      subtitle
      _rawImage
      _rawBlurb
      _rawDescription
  }
}
`

const GeneralTemplate=({data, pageContext } : PageProps<SingleEventQuery,{slug: string, template: 'general' | 'cry-cleanse-flow'}>)=> {
  console.log(pageContext)
  if (!data.sanityEvent) {
    return null;
  }
  return (
    <Layout>
      <EventBanner template={pageContext.template} image={data.sanityEvent._rawImage} title={data.sanityEvent.title} subtitle={data.sanityEvent.subtitle} events={data.sanityEvent.eventDetails} blurb={data.sanityEvent._rawBlurb}  />
    </Layout>
  )
}

export default GeneralTemplate;

export const Head:HeadFC<SingleEventQuery>= ({data, location}) =>{
  let img: string | undefined ;
  if (data.sanityEvent?._rawImage){
    img =builder.image(data.sanityEvent?._rawImage).width(1600).height(900).crop('center').url();
  }
  return (
    <SEO title={data.sanityEvent?.title} image={img} description={data.sanityEvent?._rawDescription ? toPlainText(data.sanityEvent?._rawDescription) : undefined} pathname={location.pathname}/>
  )
}