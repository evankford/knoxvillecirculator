
import  React  from "react"
import Signup from "../components/sections/Signup"
import About from "../components/sections/About"
import Layout from "../components/Layout"
import {SEO} from "../components/Seo";

// markup


export default function IndexPage(){
   return (
      <Layout hideSignup>
        <main>
          <title>Home Page</title>
          <Signup />
          <About />
        </main>
      </Layout>
    )
}


export const Head = () =>{
  return (
    <SEO />
  )
}