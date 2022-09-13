import { useStaticQuery, graphql } from "gatsby"
import * as React from "react";
import {PortableText} from '@portabletext/react';
import { palette } from "../../theme";
import SectionOuter from "../layouts/SectionOuter";

import TitleH1 from "../pt/titleH1";
import MainLogo from "../Logo";
import styled from "styled-components";
import SignupLogo from "../form/SignupLogo";
import SignupForm from "../form/Signup";

const q = graphql`query MyQuery {
  sanityIntro {
    heading {
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
  @media screen and (min-width: 1000px) {
    padding: 50px;
    margin: auto;
  }
  @media screen and (max-width: 600px){
    padding-left: 5px;
    padding-right: 5px;

  }
`

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: rgb(var(--color-background));
  align-content:center;
  justify-content: center;
  padding: 18px;

  @media screen and (min-width: 1400px) {
    flex-wrap: nowrap;
    padding-right:10vw
  }
`


export default function Intro() {
  const data:any = useStaticQuery(q);
  return (
    <SectionOuter fullHeight contentWidth="full" background={`linear-gradient(to bottom, ${palette.reddish}, ${palette.red})`} lightText>
      <Wrap>
        <MainLogo/>
        <Content>
          <PortableText
              value={data.sanityIntro.heading}
              components={{
                block: {
                  //@ts-ignore React.Reactnode is weird?
                h1: ({children})=> <TitleH1>{ children }</TitleH1>,
              }}
            }
            />
            <SignupForm/>
        </Content>
      </Wrap>
    </SectionOuter>

  )
}