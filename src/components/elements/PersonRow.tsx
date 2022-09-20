import React from "react";
import styled from "styled-components";
import {PortableText} from '@portabletext/react';
import Image from "gatsby-plugin-sanity-image"


const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 24px 0;
`
const Pict = styled.picture`
  margin: 18px;
  flex: 0 0 200px;
  height: 200px;
  border-radius: 100px;
  overflow: hidden;
  border: 6px solid var(--color-seafoam);

  img {
    width: 100%;
    height: 100%;
  }

`

const Text = styled.div`
  flex: 1 1 300px;
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
        <h2>{props.name}</h2>
        <PortableText value={props._rawBlurb}/>
      </Text>
    </Row>
  )
}