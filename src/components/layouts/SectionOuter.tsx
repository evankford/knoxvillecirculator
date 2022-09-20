import styled from "styled-components";
import React from "react";

interface SectionOuterProps {
  fullHeight?: boolean,
  contentWidth?:'full' | 'wide' | 'normal' | 'small'
  lightText?: boolean
  background?: string
  children: JSX.Element[] | JSX.Element
}

const Outer = styled.section<SectionOuterProps>`
  max-width: 100%;
  width: 100%;
  min-height: ${props =>  props.fullHeight ? 'calc(100 * var(--vh, 1vh))' : '0px' };
  display: flex;
  align-items: center;
  overflow: hidden;
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
  box-sizing: border-box;
  justify-content: center;
  background: ${props => props.background ? props.background : 'var(--color-white)'};
  color: ${props => props.lightText ? 'var(--color-white)' : 'var(--color-black)'};
`;

const Inner = styled.div<SectionOuterProps>`
  width: 100%;
  margin: auto;
  max-width: ${ props => props.contentWidth == 'full' ? '100%' :
   props.contentWidth == 'wide' ? 'clamp(900px, calc(950px + 20vw), 1350px)' :
   props.contentWidth == 'small' ? 'clamp(600px, calc(550px + 9vw), 1000px)' :
   'clamp(800px, calc(600px + 12vw), 1280px)'
  };
`;

export default function SectionOuter(props: SectionOuterProps) {
  console.log(props);
  const children = props.children;
  return (
    <Outer {...props}>
      <Inner {...props}>

        { children}
      </Inner>
    </Outer>
  )
}