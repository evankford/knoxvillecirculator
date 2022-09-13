import * as React from "react";
import styled, {keyframes} from "styled-components";
import Tilt from "react-parallax-tilt"
import Svg from "../images/seafoam.svg";

const swing = keyframes`
  0% {
    transform: perspective(400px) rotate3d(0, 1, 0, 2deg);
    filter: drop-shadow(5px 10px 5px rgba(0,0,0,0.1));

  }
  50% {

    transform: perspective(400px) rotate3d(0.5, 0.5, 0, -2deg);
  }
  100% {
    transform: perspective(400px) rotate3d(0, 1, 0, -2deg);
    filter: drop-shadow(10px 20px 20px rgba(0,0,0,0.1));
  }
`

const Logo = styled.figure`
  flex: 1 1 700px;
  max-width: 40vmax;
  @media (min-width: 800px) {
    max-width: 50vw;

  }
  margin: 0 0 0  -2%;
  /* transform: perspective(400px) rotate3d(0, 1, 0, 2deg);
  transform-style: preserve-3d; */
  /* animation: ${swing} 6s ease-in-out alternate-reverse infinite; */
  z-index:1;
  /* filter: drop-shadow(30px 10px 10px rgba(0,0,0,0.1)); */
`;

export default function MainLogo() {
  return(
    <Logo>
      {/* <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false}  trackOnWindow={true} gyroscope={true} tiltReverse={true}> */}
        <Svg/>
      {/* </Tilt> */}
    </Logo>
  )
}