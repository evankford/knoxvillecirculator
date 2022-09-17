import type { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode['createPages']  = async ({actions})=> {
  const { createRedirect  } = actions;
  createRedirect({
    fromPath:'/studio',
    toPath:'https://knoxvillecirculator.sanity.studio',
    statusCode: 200,
  })
}