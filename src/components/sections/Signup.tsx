import { useStaticQuery, graphql } from "gatsby"
import React from "react";
import {PortableText} from '@portabletext/react';
import SectionOuter from "../layouts/SectionOuter";

import TitleH1 from "../pt/titleH1";
import MainLogo from "../Logo";
import styled from "styled-components";
import SignupForm from "../form/SignupForm";

const q = graphql`query signupFormQuery {
  sanityAboutSettings {
    blurb {
      _type
      style
      list
      children {
        _key
        marks
        _type
        text
      }
    }
  }
}` ;


const Content = styled.div`
  z-index:2;
  position: relative;
  flex: 1 1 300px;
  margin: auto;
  max-width: 500px;
  padding: 30px;
  @media screen and (min-width: 1100px) {
    flex-basis: 480px;
    padding-left: 70px;
    margin: auto;
    max-width: 650px;
  }
  @media screen and (max-width: 600px){
    padding-left: 5px;
    padding-right: 5px;

  }
`

const Wrap = styled.div`
  display: flex;
  color: var(--color-pink);
  flex-wrap: wrap;
  background: rgb(var(--color-whitePink));
  align-content:center;
  justify-content: center;
  padding: 18px;

  @media screen and (min-width: 1400px) {
    flex-wrap: nowrap;
    padding-right:5vw
  }
`


export default function Intro() {
  const data:any = useStaticQuery(q);
  console.log(data.sanityAboutSettings.blurb);
  return (
    <SectionOuter fullHeight contentWidth="full" background={`var(--color-seafoam)`}>
      <Wrap>
        <MainLogo/>
        <Content>
          <TitleH1>

          <PortableText
              value={data.sanityAboutSettings.blurb}
            />
          </TitleH1>
            <SignupForm/>
        </Content>
      </Wrap>
    </SectionOuter>

  )
}