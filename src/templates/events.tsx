import React, {useEffect, useState} from "react";
import {SEO }from "../components/Seo";
import { graphql, type PageProps, type HeadFC } from "gatsby"
import type {SingleEventQuery} from "../../graphql-types";
import { toPlainText } from "@portabletext/react";
import SectionOuter from "../components/layouts/SectionOuter";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import client from "../sanityClient";
import {PortableText} from '@portabletext/react';
import Layout from "../components/Layout";
import EventDetail, {type EventDetailProps}  from "../components/elements/eventDetail";
import { parse, isPast, isAfter} from "date-fns";

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


const HeroOuter= styled.header`
  display: flex;
  min-height: 400px;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  justify-content: center;
  padding: 20px;
  @media screen and (min-width: 750px) {
    max-width: 80vw;
  }
`

const Pic=styled.picture`
  margin: 60px;
  flex: 1 1 300px;
  max-width: 500px;
  img{
    max-height: 500px;
    width: 100%;
    object-fit: contain;
    height: auto;
    object-position: 50% 50%;
  }
`

const HeroContent = styled.div`
  text-align: left;

  p{
    font-size:  20px;
  }
  flex: 1 1 500px;
`

const HeroTitle = styled.h1`
  font-weight: 700;
`

const HeroSubtitle= styled.h3`
  font-weight: 300;
`

const HeroEvents= styled.div`
  flex: 1 1 400px;
  margin:  auto auto 50px;
`

const GeneralTemplate=({data, pageContext } : PageProps<SingleEventQuery,{slug: string, layout: 'general' | 'cry-cleanse-flow'}>)=> {
  console.log(data);
  let events:EventDetailProps[]=[];


    if (data.sanityEvent?.eventDetails) {
        data.sanityEvent.eventDetails.map(e=>{
        if (!e || !e.date){
          return false;
        }
        let datee=parse(e.date, "yyyy-MM-dd HH:mm" , new Date());

        events.push(Object.assign(e,{isPast: isPast(datee), date: datee }));
      })
    }

    events.sort((a,b)=>isAfter(a.date, b.date)? -1  : 1 );


  if (!data.sanityEvent) {
    return null;
  }
  return (
    <Layout>
      <EventBanner image={data.sanityEvent._rawImage} title={data.sanityEvent.title} subtitle={data.sanityEvent.subtitle} events={events} blurb={data.sanityEvent._rawBlurb} color={pageContext.layout=='cry-cleanse-flow' ? 'var(--color-creme)' : 'var(--color-lightGray)'} />
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