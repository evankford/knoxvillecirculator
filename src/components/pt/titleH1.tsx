import styled from "styled-components";
import React, { type ReactNode } from "react";

const H = styled.div`
  font-size: clamp(20px, calc(18px + 0.7vw), 34px);
  font-weight: normal;
  line-height: 1.5;
  p {
    display:inline;
    margin: 0;
  }
  strong {
    font-weight:  700;
    font-family: 'FlexaEx';
  }
  font-weight: 300;

`
export default function H1(props:{children:ReactNode}){
  return(
    <H>{props.children}</H>
  )
}