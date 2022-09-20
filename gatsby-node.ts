import type { GatsbyNode } from "gatsby"
import type { EventDataBuilderQuery} from "./graphql-types"
import { resolve } from "path";


export const createPages: GatsbyNode['createPages']  = async ({graphql, actions})=> {
  const { createRedirect, createPage  } = actions;

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
          const path = `${edge.node.slug.current}`
          const templateName = edge.node.template || 'general';
          createPage({
            path,
            component: resolve(__dirname, `./src/templates/events.tsx`),
            context: { slug: edge.node.slug.current , template: templateName},
          })
        }
      )
  }

}