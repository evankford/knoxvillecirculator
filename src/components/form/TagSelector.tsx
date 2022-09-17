import React, {ChangeEventHandler} from "react";
import ErrorIcon from "./ErrorIcon";
import Checkbox from "./Checkbox";
import styled from "styled-components";

interface TagSelectorProps {
  handleChange: ChangeEventHandler<HTMLInputElement>
  tags:Array<'newsletter' | 'events'>
}

const ErrorWrap = styled.div`
  background: #3a1010;
  color: white;
  display: block;
  border-radius: 4px;
  padding: 0.8em;
  padding-right: 30px;
  margin: 0.5em 0;
  position:relative;
  flex: 0 0 100%;
`

const Wrap = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const Item = styled.li`
  padding: 2px;
  margin: 2px 8px 2px 2px ;
  &:first-child {
    margin-left: -2px;
  }
`

export default function tagSelector(props:TagSelectorProps) {

  return(
   <>

  <Wrap>
    <Item>
      <Checkbox text="Newsletter" id="newsletter" checked={props.tags.includes('newsletter')} handleChange={props.handleChange} hasError={false}/>
    </Item>
    <Item>
      <Checkbox text="Events" id="events" checked={props.tags.includes('events')} handleChange={props.handleChange} hasError={false}/>
    </Item>
  </Wrap>
    { props.tags.length == 0 &&
      <ErrorWrap>
        <div>Please select at least one list!</div>
        <ErrorIcon/>
      </ErrorWrap>
    }
    </>
  )
}