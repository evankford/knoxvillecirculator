import React from "react";

import { useStaticQuery,graphql } from "gatsby";
import { propTypes } from "gatsby-plugin-image/dist/src/components/gatsby-image.server";
import {FeaturedEventsQuery} from "../../../graphql-types";
import EventBanner from "../eventBanner";

export const q= graphql<FeaturedEventsQuery>`
query FeaturedEvents {
  allSanityEvent(
    limit: 3
    sort: {fields: _createdAt}
    filter: {_updatedAt: {}, featured: {eq: true}}
  ) {
    edges {
      node {
        title
        subtitle
        template
        _rawImage
        _rawBlurb
        eventDetails {
          url
          subtitle
          location
          date(formatString: "yyyy-MM-DD HH:mm")
          buttonText
          active
        }
      }
    }
  }
}

`

export default function FeaturedEvents(){
  const data:FeaturedEventsQuery= useStaticQuery(q);
  return (
    <>
      { data.allSanityEvent.edges.map((edge,i)=> (
        <EventBanner key={i} template={edge.node.template} image={edge.node._rawImage} blurb={edge.node._rawBlurb} title={edge.node.title} subtitle={edge.node.subtitle} events={edge.node.eventDetails} />
      ))}
    </>
  )
}