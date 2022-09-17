
import * as React from "react"
import Signup from "../components/sections/Signup"
import Layout from "../components/Layout"
import {SEO} from "../components/Seo";

// markup

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <main>
          <title>Home Page</title>
          <Signup />
        </main>
      </Layout>
    )
    }
  };

export default IndexPage


export const Head = () =>{
  return (
    <SEO />
  )
}