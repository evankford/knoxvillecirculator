
import * as React from "react"
import Intro from "../components/sections/Intro"
import Layout from "../components/Layout"
import {SEO} from "../components/Seo";

// markup

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <main>
          <title>Home Page</title>
          <Intro />
        </main>
      </Layout>
    )
    }
  };

export default IndexPage


export const Head=()=>{
  <SEO />
}