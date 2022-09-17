import { graphql, useStaticQuery } from "gatsby";
import {toPlainText} from '@portabletext/react';
import imageUrlBuilder from "@sanity/image-url";
import client from "../sanityClient";

const builder = imageUrlBuilder(client);

export const useSiteMetadata = () => {
  const input = useStaticQuery(graphql`
    query SiteInfo {
      sanityAboutSettings{
        _rawBlurb
      }
      sanitySocialSettings {
        _rawImage,
        _rawIcon,
      }
    }
  `)

  let data ={
    title: 'Knoxville Circulator',
    siteUrl: 'https://knoxvillecirculator.com',
    description: toPlainText(input.sanityAboutSettings._rawBlurb),
    image: builder.image(input.sanitySocialSettings._rawImage).width(1600).height(900).crop('center').url(),
  }

  return data;
}