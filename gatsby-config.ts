import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const config: GatsbyConfig = {
  siteMetadata: {
    title: `Circulator`,
    siteUrl: `https://www.yourdomain.tld`
  },
  flags: {
    FUNCTIONS: true
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
      watchMode: true
    }
  },
  {
    resolve: 'gatsby-plugin-typescript',
    options: {
     allowDeclareFields: true
    }
  },
  {
    resolve: "gatsby-plugin-sanity-image",
    options: {
      // Sanity project info (required)
       projectId: 'llb7r28p',
      dataset: 'production'
    },
  },
  "gatsby-plugin-react-svg",
  "gatsby-plugin-sass",
  "gatsby-plugin-styled-components",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sitemap",
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx","gatsby-plugin-image","gatsby-plugin-sharp", "gatsby-transformer-sharp",
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
  }

]
};

export default config;
