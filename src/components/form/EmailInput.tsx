import  React, {type ChangeEventHandler, type MutableRefObject} from "react";
import styled from "styled-components";
import ErrorIcon from "./ErrorIcon";

const I = styled.input`
  appearance: none;
  border: none;
  background: transparent;
  width: 100%;
  position: relative;
  color: inherit;
  padding: 12px 0;
  &:focus-visible {
    outline: none;
  }
`;

const Wrap = styled.div`
  position: relative;
  flex: 1 1 220px;
  max-width: 400px;
  font-size: 18px;
`;

const L = styled.label`
  font-family:"Flexa";
  width: 100%;
  font-style: normal;
  appearance:none;
  position: absolute;

  top: 10px;
  transition: opacity 200ms ease, transform 200ms ease;
  transform-origin: top left;
  /* font-weight: 200; */
  ${Wrap}:focus-within &, ${Wrap}.filled &  {
    transform: translateY(-16px) scale( 0.75);
    opacity: 0.8;
  }
`;

interface EmailInputProps {
  value: string,
  hasError?: boolean
  focusElRef: MutableRefObject<HTMLInputElement | null>,
  handleChange:ChangeEventHandler<HTMLInputElement>
}

export default function EmailInput(props:EmailInputProps) {
  return(
    <Wrap className={`${props.value !== '' ? 'filled' : ''}`}>
      <L>
      {props.hasError && <ErrorIcon/>}
      Your Email Address</L>
      <I onChange={props.handleChange} ref={props.focusElRef} name="email" id="email"  />
    </Wrap>
  )
}