import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import styled, {keyframes} from 'styled-components'

const spin = keyframes`
  from{
    transform: rotate(0deg);

  }
  to {
    transform: rotate(360deg);
  }
`

const B = styled.button`
  background: none;
  color: inherit;
  border: none;
  flex: 0 0 auto;
  height: auto;
  position: relative;
  appearance: none;
  overflow: hidden;
  transition: transform 200ms ease;
  display: block;
  margin-right: 4px;
  padding: 0 12px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    border-left: 2px solid currentColor;
    opacity: 0;
    transform: scale(1.5);
    transition: opacity 200ms ease, transform 200ms ease;
  }
  &:focus {
    outline: none;
    transform: scale(1.1) translateX(6px) ;
    &::after {
      transform: scale(0.9);
      opacity: 1;
    }
  }

  &:disabled {
    opacity: 0.8;
    animation: ${spin} 2s linear infinite;
  }
`



export default function ArrowSubmit(props: {submitting:boolean}) {
  if(props.submitting){
    return(
    <B type="submit" disabled aria-label="Submitting">
      <FontAwesomeIcon icon={solid('loader')} />
    </B>
    )
  }
  return(
    <B type="submit" aria-label="Submit">
      <FontAwesomeIcon icon={solid('arrow-right')} />
    </B>
  )
}