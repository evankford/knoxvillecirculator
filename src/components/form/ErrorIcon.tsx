import * as React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import styled from 'styled-components'

const I = styled.i`
  background: #3a1010;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  line-height: 24px;
  border-radius: 24px;
  color: white;
  margin-right: 5px;
  font-size:12px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);


`
export default function ErrorIcon(){
  return (
    <I aria-label="Active Error"><FontAwesomeIcon icon={solid('triangle-exclamation')}/></I>
  )
}