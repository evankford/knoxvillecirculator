import React from "react";
import {SEO }from "../../components/Seo";
import { graphql, type PageProps, type HeadFC } from "gatsby"
import type {SingleEventQuery} from "../../../graphql-types";
import { toPlainText } from "@portabletext/react";
import SectionOuter from "../../components/layouts/SectionOuter";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import Image from "gatsby-plugin-sanity-image";
import client from "../../sanityClient";
import {PortableText} from '@portabletext/react';

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


const HeroOuter= styled.header`
  display: flex;
  min-height: 400px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const Pic=styled.picture`
  margin: 20px;
  flex: 1 1 300px;
  max-width: 600px;
  max-height: 600px;
`

const HeroContent = styled.div`
  text-align: left;
`

const HeroTitle = styled.h1`
  font-weight: 700;
`

const GeneralTemplate=({data } : PageProps<SingleEventQuery,{slug: string}>)=> {
  return (
    <SectionOuter background="var(--color-lightGray);">
      <HeroOuter>
        {data.sanityEvent?._rawImage &&
          <Pic>
            <Image {...data.sanityEvent._rawImage}/>
          </Pic>
        }
        <HeroContent>
          {data.sanityEvent?.title &&
            <HeroTitle>{data.sanityEvent?.title}</HeroTitle>
          }
          {data.sanityEvent?._rawBlurb &&
              <PortableText
              value={data.sanityEvent._rawBlurb}
            />
          }
          </HeroContent>
      </HeroOuter>
    </SectionOuter>
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