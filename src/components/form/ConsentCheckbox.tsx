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
  padding: 10px 0 10px 30px;
  line-height: 1.4;
  font-size: 15px;
  @media (max-width: 600px) {
    font-size: 13px;
    padding-left: 25px;
  }
  margin:  0 0;
  position: relative;
  font-weight: 200;
  display: flex;
  &::before {
    content:'';
    display: block;
    width: ${width};
    height: ${width};
    box-sizing: border-box;
    transform: translateY(-50%);
    border: 1px solid white;
    position: absolute;
    top: calc(50% - 5px);
    left: 0;
    transition: transform 200ms ease;
  }

  &::after {
    content :'✓';
    font-weight: bold;
    display: block;
    position: absolute;
    top: calc(50% - 5px);
    transform: translateY(-50%);
    left: 0;
    width: ${width};
    text-align: center;
    line-height: ${width};
    box-sizing: border-box;
    height: ${width};
    background: white;
    opacity: 0;
    transition: opacity 200ms ease, transform 200ms ease;
    color: ${palette.red};
  }

  ${CheckBox}:focus + &  {
    border-bottom: 2px solid rgba(white, 0.5);
    &::before, &::after {
      transform: translateY(-54%);
      box-shadow: 0 0 5px black

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
  consentText:string | undefined,
  hasError: boolean | undefined,
  consentLinkText:string|undefined,
  consentUrl: string|undefined,
  handleChange: React.ChangeEventHandler<HTMLInputElement>

}
export default function ConsentCheckbox(props:ConsentProps) {


      return (
          <label style={{display: 'block'}}>
            <CheckBox onChange={props.handleChange} type="checkbox" id="consent" name="consent"></CheckBox>
            <CheckMain>
              {props.hasError && <ErrorIcon/>}
              <span>
              { props.consentText &&
                <span>{props.consentText}</span>
              }
              <ConsentLink  text={props.consentLinkText} url={props.consentUrl}/>
              </span>
            </CheckMain>
          </label>
    )
  }
