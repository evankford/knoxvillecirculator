import { useStaticQuery, graphql } from "gatsby"
import React, {useEffect, useRef} from "react";
import {PortableText} from '@portabletext/react';
import SectionOuter from "../layouts/SectionOuter";

import Balloons from "../../images/balloons.svg";
import Papers from "../../images/papers.svg";
import styled from "styled-components";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PersonRow from "../elements/PersonRow";
import {AboutSectionQuery} from "../../../graphql-types";
//@ts-ignore

import ReactHtmlParser from "react-html-parser";

gsap.registerPlugin( ScrollTrigger);

const q = graphql`query AboutSection {
  sanityAboutSettings {
    title
    _rawDescription
  }
  sanityEventSettings {
    _rawDescription
  }
  allSanityPerson(limit: 10, filter: {aboutFeatured: {eq: true}}, sort: {fields: orderRank, order:ASC}) {
    nodes {
      _rawBlurb
      _rawImage
      name
      subtitle
    }
  }
}` ;


const H = styled.h1`
position: relative;
z-index:10;
  text-align: center;
  letter-spacing: -0.05em;
  display: block;
  margin: 2rem 0 5rem;
  box-sizing: border-box;
  text-transform: lowercase;
  font-size: 6.8rem;


  @media screen and (min-width: 1200px){
    font-size:10rem
  }

   span{
    position: relative;
    display: inline-block;
    margin: 0 0.15em;
    text-align: left;
    width: auto;max-width:max-content;
    padding: 00;
    line-height:1;
    &::after{
      content:'';
      position: absolute;
      display: block;
      height: 0.2em;
      width: 100%;
      bottom:0;
      left: 0;
      background: var(--color-red);
      z-index: -1;
    }
  }

   @media screen and (min-width: 1000px) {
    position: fixed;
     font-size:8rem;
    margin: 0;
    text-align: left;
    right: 65vw;
    max-width:500px;
    width: 35vw;
    padding-left: 50px;
    top: 50%;
    transform: translate3d(0, -50%, 0);
   }
`

const Column = styled.div`
  z-index:2;
  position: relative;
  flex: 1 1 300px;
  margin: 20px auto;
  max-width: 700px;
  padding: 0 20px;
  @media screen and (min-width: 900px) {
   padding: 20px 20px
  }
  margin: 10px;
  height: auto;
  /* background: var(--color-white); */
  border-radius: 5px;;
  z-index: 2;
  position: relative;
  p{
    text-align: justify;
  }
  align-items: stretch;
  @media screen and (min-width: 1100px) {
    flex-basis: 450px;
  }
  @media screen and (max-width: 600px){
    padding-left: 5px;
    padding-right: 5px;

  }
`
const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 700px) {
      align-items: flex-start;
    }
`

const Wrap= styled.div`
  text-align: center;
  padding: 50px 0;
  color: var(--color-white);
  position: relative;
  margin: 0 0 50px;

  @media screen and (min-width: 1000px) {
    padding-left: 35vw;
  }
`


const Pic = styled.figure`
  display: block;
  width:70px;
  float: left;
    @media screen and (min-width:600px) {
  width:100px;
    }
  flex: 1 0 70px;
      margin: 0 8% 0 0;
  position: relative;
  overflow: visible;
  box-sizing: border-box;
  &::before{
    content:"";
    width: 120%;
    box-sizing: border-box;
    aspect-ratio: 1;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    left: 50%;
    z-index: 0;
    opacity: 0.5;
    display: block;
    border:5px solid var(--color-seafoam);
    position: absolute;
  }


svg{
  position: relative;
  z-index:2;
}
`

const HH = styled.h2`
  flex: 0 0 auto;
  color: var(--color-whiteGreen);

  @media screen and (min-width:600px) {

    font-size: 4.8rem;
  }
    font-weight: 700;

    letter-spacing: -0.05em;
    /* text-transform: uppercase; */
    text-align:  left;
    margin:   0px 0 auto 20px;
    font-weight: 500;
    /* letter-spacing: 0.04em; */



`

function basicSplit(text:string):string{
  let splitText= text.split(/\W+/);

  let t='';

  splitText.forEach(e=>{
    t+=`<span>${e}</span>`
  });

   return t;
}


export default function About() {
  const data:AboutSectionQuery = useStaticQuery(q);

  const header = useRef<HTMLHeadingElement>(null);
  const header2 = useRef<HTMLHeadingElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const wrap2 = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if (header2) {
      gsap.set(header2!.current!.querySelectorAll('span'),
      {opacity: 0});
    } if (header) {
      gsap.set(header!.current!.querySelectorAll('span'),
      {opacity: 0});
    }
    if(header.current && header2.current){
      gsap.fromTo(header.current.querySelectorAll('span'), {id:'Starter',
      opacity: 0,
      yPercent: 55,
    },
    {
      opacity: 1,
      yPercent:0,
      stagger: 0.15,
      repeatDelay: 1,
      scrollTrigger:{
        trigger: wrap.current,
        toggleActions: "play reverse play none",
        start: 'top 90%',
        end: '100%-=250px top'
      },
    });

        gsap.fromTo(header2.current.querySelectorAll('span'), {id:'Starter',
          opacity: 0,
          yPercent: 55,
        },
        {
          opacity: 1,
          yPercent:0,
          stagger: 0.15,
          repeatDelay: 1,
          scrollTrigger:{
            trigger: wrap2.current,
            toggleActions: "play none play reverse",
            start: '0%-=150px',
            end: 'bottom 90%'
          },
        });

    }
        ScrollTrigger.refresh();


  })
   return (
    <SectionOuter fullHeight contentWidth="wide" background={`linear-gradient(to bottom, var(--color-black), var(--color-magnolia))`}>
      <Wrap ref={wrap}>
        <H ref={header}>{ ReactHtmlParser(basicSplit(data.sanityAboutSettings?.title ?? 'What We Do'))}</H>
        {/* <H ref={header2}>{ ReactHtmlParser(basicSplit('Who We Are'))}</H> */}

          <Row >
            <Column>

                <Pic>

                  <Papers/>
                </Pic>

                <HH>The Circulator:</HH>

                <PortableText
                    value={data.sanityAboutSettings?._rawDescription}
                    />
            </Column>
                    </Row>
          <Row>

            <Column>
              <Pic style={{marginBottom: '-4.5%'}}>
                <Balloons/>
              </Pic>
              <HH>Events:</HH>
              <PortableText
                  value={data.sanityEventSettings?._rawDescription}
                  />

            </Column>
          </Row>
      </Wrap>
      <Wrap ref={wrap2}>
        <H ref={header2}>{ ReactHtmlParser(basicSplit('Who We Are'))}</H>
        {/* <H ref={header2}>{ ReactHtmlParser(basicSplit('Who We Are'))}</H> */}
        {data.allSanityPerson.nodes.map(person=> (
          <PersonRow {...person} />
        ))}
      </Wrap>
    </SectionOuter>

  )
}