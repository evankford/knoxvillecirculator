
import  React  from "react"
import Signup from "../components/sections/Signup"
import Layout from "../components/Layout"
import {SEO} from "../components/Seo";

// markup


export default function IndexPage(){
   return (
      <Layout hideSignup>
        <main>
          <title>Home Page</title>
          <Signup />
        </main>
      </Layout>
    )
}


export const Head = () =>{
  return (
    <SEO />
  )
}