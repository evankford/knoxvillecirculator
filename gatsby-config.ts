import type { GatsbyConfig } from "gatsby";

import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})
const config: GatsbyConfig = {
  siteMetadata: {
    title: `Knoxville Circulator`,
    description: 'A periodical newsletter and zine based media organization, for and by Knoxvillians looking for simple ways to engage with local politics without sacrificing their day-jobs, social lives, free time, and mental stability.',
    siteUrl: `https://knoxvillecirculator.com`,
    image:  '/social-image.jpg',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        allowList:['MAILCHIMP_API_KEY','MAILCHIMP_SERVER', 'MAILCHIMP_LIST_ID']
      }
    },
  `gatsby-plugin-pnpm`,
  {
    resolve: 'gatsby-source-sanity',
    options: {
      projectId: 'llb7r28p',
      dataset: 'production',
      watchMode: process.env.NODE_ENV !== 'production',
    }
  },
  {
  resolve: "gatsby-plugin-sanity-image",
  options: {
    // Sanity project info (required)
    projectId: "llb7r28p",
    dataset: "production",
  },
},
  {
    resolve: 'gatsby-plugin-typescript',
    options: {
     allowDeclareFields: true
    }
  },
  "gatsby-plugin-react-svg",
  "gatsby-plugin-sass",
  "gatsby-plugin-sitemap",
  {
    resolve: `gatsby-plugin-graphql-codegen`,
    options: {
      documentPaths: [
        './src/**/*.{ts,tsx}',
        './src/**/**/*.{ts,tsx}',
        './node_modules/gatsby-*/**/*.js',
        './gatsby-node.ts',
      ],
    }
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/square.png"
    }
  }, "gatsby-plugin-image","gatsby-plugin-sharp", "gatsby-transformer-sharp",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve:
    "gatsby-plugin-styled-components",
    options: {
      displayName: true,
      "minify": false,
      "pure": false,
      "transpileTemplateLiterals": false
    }
  }


]
};

export default config;
