import { graphql, useStaticQuery } from "gatsby";
import {toPlainText} from '@portabletext/react';
import imageUrlBuilder from "@sanity/image-url";
import client from "../sanityClient";

const builder = imageUrlBuilder(client);

export const useSiteMetadata = () => {
  const input = useStaticQuery(graphql`
    query SiteInfo {
      sanityAboutSettings{
        _rawDescription
      }
      sanitySocials {
        _rawImage,
        _rawIcon,
      }
    }
  `)

  console.log(input);

  let data ={
    title: 'Knoxville Circulator',
    siteUrl: 'https://knoxvillecirculator.com',
    // description: toPlainText(input.sanityAboutSettings._rawDescription),
    // image: builder.image(input.sanitySocials._rawImage)
  }

  return data;
}