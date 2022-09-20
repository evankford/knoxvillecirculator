
import  React  from "react"
import Signup from "../components/sections/Signup"
import About from "../components/sections/About"
import Layout from "../components/Layout"
import {SEO} from "../components/Seo";
import FeaturedEvents from "../components/sections/FeaturedEvents";

// markup


export default function IndexPage(){
   return (
      <Layout hideSignup>
        <main>
          <title>Home Page</title>
          <Signup />
          <FeaturedEvents/>
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