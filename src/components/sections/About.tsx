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

import ReactHtmlParser from "html-react-parser";

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

   @media screen and (min-width: 900px) {
    position: fixed;
     font-size:8rem;
    margin: 0;
    text-align: left;
    right: 65vw;
    max-width:500px;
    width: 35vw;
    padding-left: min(calc(10px + 1vw), 50px);
    top: 50%;
    transform: translate3d(0, -50%, 0);
   }
`

const Row = styled.div`
    z-index:2;
    position: relative;
    flex: 1 1 300px;
    margin: 20px auto;
    max-width: 660px;
    padding: 0 20px;
    @media screen and (min-width: 900px) {
    padding: 20px 20px
    }
    @media (min-width: 1100px) {
      padding-left: 150px;
    }
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

const Wrap= styled.div`
  text-align: center;
  padding: 50px 10px;
  color: var(--color-white);
  position: relative;

  @media screen and (min-width: 900px) {
    padding-left: 35vw;
  }
`


const Pic = styled.div`
  display: block;
  position: relative;
  flex: 0 0 70px;
  z-index:0;
  @media screen and (min-width:600px) {
    flex: 0 0 80px;
  }
  @media (min-width: 1100px) {
    flex: 0 0 100px;
    height: 120px;
    margin-bottom: -60px;
  }
  margin: 0 4% 0 0;
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
  position: relative;

  z-index:3;
  color: var(--color-whiteGreen);

  @media screen and (min-width:600px) {

    font-size: 4.8rem;
  }
    font-weight: 700;

    letter-spacing: -0.05em;
    /* text-transform: uppercase; */
    margin:   auto 0 auto 20px;
    font-weight: 500;
    /* letter-spacing: 0.04em; */


`;

const Title = styled.header`
  position: relative;
  z-index: 2;
  text-align: left;
  display: flex;
  @media (min-width: 1100px) {
    align-items: flex-end;
    margin: 0 0 0 -152px;
  }
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

      let mm = gsap.matchMedia();

      mm.add('(min-width: 900px)', ()=>{

        const uu = gsap.fromTo(header2!.current!.querySelectorAll('span'), {id:'Starter',
          opacity: 0,
          yPercent: 55,
        },
        {
          opacity: 1,
          paused: true,
          yPercent:0,
          stagger: 0.09,
        });


        const aa = gsap.fromTo(header!.current!.querySelectorAll('span'), {id:'Starter',
          opacity: 0,
          yPercent: 55,
        },
        {
          opacity: 1,
          yPercent:0,
          stagger: 0.09,
          repeatDelay: 1,
          paused: true
        });

        gsap.fromTo(header!.current!.querySelectorAll('span'), {id:'Starter',
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
            toggleActions: "play reverse none none",
            start: 'top 90%',
            end: '100%-=250px top',
            onEnterBack: ()=>{  if(window.innerWidth > 900){ uu.reverse().then(()=>aa.play())}},
            onLeave: ()=>{  aa.reverse().then(()=>uu.play())},
          },
        });


      })

      mm.add('(max-width: 899px)', ()=> {
        gsap.fromTo(header2!.current!.querySelectorAll('span'), {id:'Starter',
          opacity: 0,
          yPercent: 55,
        },
        {
          opacity: 1,
          paused: true,
          yPercent:0,
          stagger: 0.09,
          scrollTrigger: {
            trigger: header2.current
          }
        });
        gsap.fromTo(header!.current!.querySelectorAll('span'), {id:'Starter',
          opacity: 0,
          yPercent: 55,
        },
        {
          opacity: 1,
          paused: true,
          yPercent:0,
          stagger: 0.09,
          scrollTrigger: {
            trigger: header.current
          }
        });
      })

        ScrollTrigger.refresh();

    }
  })
   return (
    <SectionOuter fullHeight contentWidth="wide" background={`linear-gradient(to bottom, var(--color-black), var(--color-magnolia))`}>
      <Wrap ref={wrap}>
        <H ref={header}>{ ReactHtmlParser(basicSplit(data.sanityAboutSettings?.title ?? 'What We Do'))}</H>
        {/* <H ref={header2}>{ ReactHtmlParser(basicSplit('Who We Are'))}</H> */}

          <Row >
            <Title>

                <Pic>
                  <Papers/>
                </Pic>

                <HH>The Circulator:</HH>
            </Title>

                <PortableText
                    value={data.sanityAboutSettings?._rawDescription}
                    />
                    </Row>
          <Row>
              <Title>
                <Pic >
                  <Balloons/>
                </Pic>
              <HH>Events:</HH>
              </Title>
              <PortableText
                  value={data.sanityEventSettings?._rawDescription}
                  />

          </Row>
      </Wrap>
      <Wrap ref={wrap2}>
        <H ref={header2}>{ ReactHtmlParser(basicSplit('Who We Are'))}</H>
        {/* <H ref={header2}>{ ReactHtmlParser(basicSplit('Who We Are'))}</H> */}
        {data.allSanityPerson.nodes.map((person, i)=> (
          <PersonRow {...person} key={i} />
        ))}
      </Wrap>
    </SectionOuter>

  )
}