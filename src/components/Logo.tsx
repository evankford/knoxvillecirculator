import * as React from "react";
import styled, {keyframes} from "styled-components";
import Svg from "../images/bandp.svg";


const Logo = styled.picture`
  flex: 1 1 700px;
  max-width: clamp(150px, 40vmax,  60vw);
  @media (min-width: 800px) {
    max-width: 48vmax;

  }
  margin: 0;
  /* transform: perspective(400px) rotate3d(0, 1, 0, 2deg);
  transform-style: preserve-3d; */
  z-index:1;
  /* filter: drop-shadow(30px 10px 10px rgba(0,0,0,0.1)); */
`;

export default function MainLogo() {
  return(
    <Logo>
        <Svg/>
    </Logo>
  )
}