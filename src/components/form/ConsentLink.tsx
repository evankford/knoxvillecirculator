import * as React from "react";
import styled from "styled-components";
const A = styled.a`
display: block;
  color: inherit;
  font-weight: 400;
`

interface ConsentLinkProps {
  text: string | undefined
  url: string | undefined
}
export default function ConsentLink(props:ConsentLinkProps) {
  if (props.text && props.url) {

    return (
     <A href={props.url}>{props.text}</A>
    )
  }
  return (null);
}