import styled from "styled-components";
import React, { type ReactNode } from "react";

const H = styled.h1`
  font-size: clamp(20px, calc(18px + 0.7vw), 38px);
  font-weight: normal;
  line-height: 1.5;
  font-weight: 300;
  @media screen and (max-width: 600px) {
    text-align: justify;
  }
  strong {
    font-size: 1.2em;
  }
`


export default function H1(props:{children:ReactNode}){
  return(
    <H>{props.children}</H>

  )
}