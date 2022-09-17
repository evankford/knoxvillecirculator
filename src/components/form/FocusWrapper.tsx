
import React, {useState, type MutableRefObject} from "react";
import { palette } from "../../theme";
import SignupLogo from "./SignupLogo";
import {useFocusWithin} from "react-aria";
import styled from 'styled-components';

const Wrap = styled.div`
  /* position: absolute; */

  /* border-top: 2px solid ${palette.white}; */
  bottom: 0;
  padding: 0 0;
   margin: auto;
  display: flex;
  position: relative;
  transition: transform 300ms ease;
  /* transform: translateY(40px); */
  flex: 1 1 auto;
  color: inherit;
  /* &:focus-within {
    transform: translateY(0)
  } */
`

const LogoWrapper = styled.div`
  /* position: absolute; */
  /* top: 0px;
  left: 0; */
  margin: auto 20px auto 0;
  width: 80px;
  transform-origin: top center;
  transform: translateY(-3px);
  transition: transform 300ms ease;
  @media (max-width:600px){
    margin: auto 10px auto -15px;
  }
  ${Wrap}:focus-within &  {
    transform: translateY(0) scale(1);
  }
`


interface FocusWrapperProps {

  children: JSX.Element[] | JSX.Element,
  toFocus: MutableRefObject<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement|null>,
}

export default function FocusWrapper(props:FocusWrapperProps) {


  return (
    <Wrap  >
      <LogoWrapper aria-label="Join The List" onClick={()=>{if (props.toFocus.current){
        props.toFocus.current.focus()
      }}}>
        <SignupLogo/>
      </LogoWrapper>
      {props.children}
    </Wrap>
  )
}