import * as React from "react";
import styled, {keyframes} from "styled-components";
import MiddleSvg from "../../images/middle.svg";
import OuterSvg from "../../images/outer.svg";

const LogoWrap = styled.figure`
  position: relative;
  width: 100%;
  margin: 0;
  &::after {
    display: block;
    padding: 0 0 100%;
    content: '';
  }

`;

const Middle = styled.div`
  position: absolute;
  width: 36%;
  height: 36%;
  left: 32%;
  top: 30%;

`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform:rotate(360deg);
  }
`

const Outer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: 20s ${spin} infinite linear;

`;



export default function SignupLogo() {
  return (
    <LogoWrap >
      <Outer>
        <OuterSvg />
      </Outer>
      <Middle>
        <MiddleSvg />
      </Middle>
    </LogoWrap>
  )
}