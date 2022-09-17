import * as React from "react";
import { palette } from "../../theme";
import styled from "styled-components";
import ErrorIcon from "./ErrorIcon";

const CheckBox = styled.input`
  appearance: none;
  position: absolute;
  width: 0;
  height: 0;
  clip-path: inset(200px);
  overflow: hidden;
`

const width = '15px';
const CheckMain = styled.div`
  padding: 10px 0 10px 25px;
  line-height: 1.4;
  font-size: 15px;
  @media (max-width: 600px) {
    font-size: 13px;
    padding-left: 25px;
  }
  margin:  0 0;
  position: relative;
  display: flex;
  &::before {
    content:'';
    display: block;
    width: ${width};
    height: ${width};
    box-sizing: border-box;
    transform: translateY(-50%);
    border: 2px solid currentColor;
    position: absolute;
    top: 50%;
    left: 0;
    transition: transform 200ms ease;
  }

  &::after {
    content :'✓';
    font-weight: bold;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: ${width};
    text-align: center;
    line-height: ${width};
    box-sizing: border-box;
    height: ${width};
    opacity: 0;
    transition: opacity 200ms ease, transform 200ms ease;
    color: ${palette.red};
  }

  ${CheckBox}:focus + &  {
    border-bottom: 2px solid rgba(white, 0.5);
    &::before{

      box-shadow: 0 0 2px -2px currentColor
    }
    &::before {
      border-width: 3px;
    }
  }
  ${CheckBox}:checked +& {
    &::after {
      opacity: 1;
    }
  }
`

import ConsentLink from "./ConsentLink";

interface ConsentProps {
  id?: string,
  checked?: boolean
  text:string | undefined,
  hasError: boolean | undefined,
  linkText?:string|undefined,
  url?: string|undefined,
  handleChange: React.ChangeEventHandler<HTMLInputElement>

}
export default function ConsentCheckbox(props:ConsentProps) {


      return (
          <label style={{display: 'block'}}>
            <CheckBox checked={props.checked ? true : false} onChange={props.handleChange} type="checkbox" id={props.id ? props.id : 'consent'} name={props.id ? props.id : 'consent'}></CheckBox>
            <CheckMain>
              {props.hasError && <ErrorIcon/>}
              <span>
              { props.text &&
                <span>{props.text}</span>
              }
              <ConsentLink  text={props.linkText} url={props.url}/>
              </span>
            </CheckMain>
          </label>
    )
  }
