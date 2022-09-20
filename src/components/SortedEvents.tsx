import React from "react";
import { parse, isPast, isAfter} from "date-fns";
import styled from "styled-components";
import type { EventDetailProps } from "./elements/eventDetail";
import EventDetail from "./elements/eventDetail";
export interface EventDetailsInput {
  date?:any
  url?:string|null|undefined
  location?:string|null|undefined
  subtitle?:string|null|undefined
  buttonText?:string|null|undefined
  active?:boolean|null|undefined

}
interface SortedEventsProps {
  events: Array<EventDetailsInput| null> | null | undefined,
}




const Wrap= styled.div`
  flex: 1 1 400px;
  margin:  auto auto 50px;
`


const SortedEvents = (props:SortedEventsProps)=>{
  let events:EventDetailProps[]=[];
  if (props.events && props.events.length>0){
    props.events.map(e=>{
        if (!e || !e.date){
          return false;
        }
        let datee=parse(e.date, "yyyy-MM-dd HH:mm" , new Date());

        events.push(Object.assign(e,{isPast: isPast(datee), date: datee }));
      })
    }

    events.sort((a,b)=>isAfter(a.date, b.date)? -1  : 1 );
  return (
    <Wrap>
      {events.map((e,i)=>(
        <EventDetail {...e} key={i}/>
      ))}
    </Wrap>
  )
}

export default SortedEvents;