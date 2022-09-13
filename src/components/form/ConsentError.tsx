import * as React from "react";
import styled from "styled-components";

const Para = styled.p`
  margin: 0;
`


interface ConsentErrorProps {
  error: boolean;
}

export default function ConsentError(props: ConsentErrorProps) {
  if (props.error) {
    return (
      <Para><b>Check the box!</b> We want to (and have to!) make sure you know what you're signing up for.</Para>
    )
  }
  return (null);
}