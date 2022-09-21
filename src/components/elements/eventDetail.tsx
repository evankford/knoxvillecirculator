import React from "react";
import styled from "styled-components";
import {format, isValid} from "date-fns/esm";
export interface EventDetailProps {
  active?:boolean |undefined|null,
  date: Date,
  location?: string|undefined|null
  subtitle?: string|undefined|null,
  buttonText?: string|undefined|null,
  url?: string|undefined|null,
  isPast?:boolean
}

const EventDetailWrap = styled.div`
  display:flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
  border-bottom: 2px solid;
  margin: 10px auto;
  max-width: 750px;
`

const Title = styled.div`
flex: 0 0 auto;
font-size: 2rem;
margin: 5px 10px;
`
const Subtitle = styled.div`
flex: 0 0 auto;
margin: 5px 10px;
`
const DateEl = styled.div.attrs({className:'event-date'})`
font-family:'FlexaEx';
font-size:  2rem;
flex: 0 0 auto;
margin: 5px 10px;
`

const B= styled.a.attrs({
  className:'button'
})`
  text-decoration: none;
  display: inline-block;
  background: var(--color-magnolia);
  color: var(--color-whiteGreen);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-family:'FlexaEx';
  font-size: 1.4rem;
  padding: 0.75em 1.5em;
  margin: 5px;
  transition: transform 200ms ease;
  &[disabled]{

  }
  &:hover{
    transform: translateY(-2px);
  }
`

const BnoLink= styled.div.attrs({className:'button'})`
  text-decoration: none;
  display: inline-block;
  background: var(--color-magnolia);
  color: var(--color-whiteGreen);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-family:'FlexaEx';
  font-size: 1.4rem;
  padding: 0.75em 1.5em;
  margin: 5px;
  transition: transform 200ms ease;
  &[aria-disabled] {
    background: transparent;
    color:var(--color-magnolia);
    pointer-events: none;
    padding: 0

  }
  &:hover{
    transform: translateY(-2px);
  }
`

const Details = styled.div`
  flex: 1 1 350px;
  align-items: center;
`
const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  flex: 1 1 150px;
`
export default function EventDetail(props:EventDetailProps){
  if (!props.active  ) {
    return null;
  }

  let button:JSX.Element|null = null;

  if (props.buttonText){
    button= <BnoLink>{props.buttonText}</BnoLink>
  }
  if (props.url){
    if( props.buttonText){
      button = <B href={props.url}>{props.buttonText}</B>
    } else {
      button = <B href={props.url}>Join Us</B>

    }
  } if (props.isPast == true){

      button = <BnoLink aria-disabled={true}>Event Completed</BnoLink>

  }
  return (

    <EventDetailWrap>
      <Details>
        { props.date && isValid(props.date) &&
          <DateEl>
            {format(props.date, "EEE, MMM do @ p")}
          </DateEl>
        }
        { props.location &&
          <Title>{props.location}</Title>
        }
        { props.subtitle &&
          <Subtitle>{props.subtitle}</Subtitle>
        }
      </Details>
        <Links>
      {button}
      </Links>
    </EventDetailWrap>
  )
}