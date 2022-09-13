import * as React from "react";
import styled from "styled-components";

const Para = styled.p`
  margin: 0;
`

interface EmailErrorProps {
  error: boolean;
}

export default function EmailError(props: EmailErrorProps) {
  if (props.error) {

    return (
      <Para><b>Oops!</b> Please enter a valid email address.</Para>
    )
  }
  return (null);
}