
import * as React from "react"
import Intro from "../components/sections/Intro"
import Layout from "../components/Layout"


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
