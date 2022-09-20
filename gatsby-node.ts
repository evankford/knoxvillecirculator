import type { GatsbyNode } from "gatsby"
import type { EventDataBuilderQuery} from "./graphql-types"
import { resolve } from "path";


export const createPages: GatsbyNode['createPages']  = async ({graphql, actions})=> {
  const { createRedirect, createPage  } = actions;
  createRedirect({
    fromPath:'/studio',
    toPath:'https://knoxvillecirculator.sanity.studio',
    statusCode: 200,
  })

  createRedirect({
    fromPath:'/cry-cleanse-flow',
    toPath:'/events/cry-cleanse-flow',
    statusCode: 200,
  })

  const eventData = await graphql<EventDataBuilderQuery>(`
    query eventDataBuilder {
      allSanityEvent(filter: {slug: {current: {ne: null}}}) {
        edges {
          node {
            slug {
              current
            }
            template
          }
        }
      }
    }
  `);

  if (eventData.errors){
    throw eventData.errors;
  }

  if (eventData.data) {
    const events = eventData.data.allSanityEvent.edges || [];
      events.forEach((edge)=>
       {
          if (!edge.node.slug?.current) {
            return;
          }
          const path = `/events/${edge.node.slug.current}`
          const templateName = edge.node.template || 'general';
          createPage({
            path,
            component: resolve(__dirname, `./src/templates/events/${templateName}.tsx`),
            context: { slug: edge.node.slug.current },
          })
        }
      )
  }

}