import React from "react";
import styled from "styled-components";
import {PortableText} from '@portabletext/react';
import Image from "gatsby-plugin-sanity-image"


const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 24px 0;
  @media (max-width: 700px) {
    margin: 12px 0;
  }
  align-items: center;
  justify-content: center;
`
const Pict = styled.picture`
  margin: 18px;
  flex: 0 0 150px;
  height: 150px;
  border-radius: 100px;
  overflow: hidden;
  border: 6px solid var(--color-seafoam);

  @media (max-width: 700px) {
    margin: auto 0px auto -10px;
    flex: 0 0 100px;
    height: 100px;
  }

  @media (min-width: 1100px) {
    margin-left: -38px;
  }

  img {
    width: 100%;
    height: 100%;
  }

`

const HH = styled.h2`
  flex: 0 0 auto;
  margin: 0 0 0.1em;
  color: var(--color-whiteGreen);

  @media screen and (min-width:600px) {

    font-size: 4.8rem;
  }
    font-weight: 700;

    letter-spacing: -0.05em;
    /* text-transform: uppercase; */
    text-align:  left;
    font-weight: 500;
    /* letter-spacing: 0.04em; */
`

const Text = styled.div`
  flex: 2 1 200px;
  padding: 20px;
  text-align: left;
`

interface PersonProps {

    _rawBlurb?: any;
    _rawImage?: any;
    name?: string | null | undefined;
    subtitle?: string | null | undefined;
}

export default function PersonRow(props: PersonProps) {
  return (

    <Row>
      {props._rawImage &&
        <Pict><Image {...props._rawImage} width={500} height={500} alt={props.name} config={{width: 500, height: 500, fit: 'crop', crop:'focalpoint'}} /></Pict>
      }
      <Text>
        <HH>{props.name}</HH>
        <PortableText value={props._rawBlurb}/>
      </Text>
    </Row>
  )
}