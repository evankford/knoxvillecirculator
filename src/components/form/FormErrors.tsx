import * as React from "react";
import styled from "styled-components";
import EmailError from './EmailError';
import ConsentError from './ConsentError';
interface ErrorProps {
  errorMessage:string | undefined
}

const ErrorWrap = styled.div`
  background: #3a1010;
  color: white;
  display: block;
  border-radius: 4px;
  padding: 0.8em;
  margin: 0.5em;
  flex: 0 0 100%;
  max-width: 500px;
`

export default function Errors(props:ErrorProps ) {
  if (props.errorMessage) {
    return (
      <ErrorWrap>
        <p>
        {props.errorMessage}

        </p>
      </ErrorWrap>
    )
  }
  return (<></>);
}