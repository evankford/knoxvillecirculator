import React , {useState} from "react";
import type { SingleEventDetail } from "./eventDetailsForm";
import {CommonDateTimeInput} from "sanity/src/form/inputs/DateInputs/CommonDateTimeInput"
import  {set, unset, type FormPatch, type PatchEvent} from "sanity/src/form/patch"

import type { ParseResult } from "sanity/src/form/inputs/DateInputs/types";
import {format, parse , isValid} from "date-fns";
interface SingleEventInputProps  {
  value: SingleEventDetail,
  readOnly: boolean | undefined
  handleChange:( val:SingleEventDetail)=>void
}


function serialize(date: Date) {
  return date.toISOString()
}
function deserialize(isoString: string): ParseResult {
  const deserialized = new Date(isoString)
  if (isValidDate(deserialized)) {
    return {isValid: true, date: deserialized}
  }
  return {isValid: false, error: `Invalid date value: "${isoString}"`}
}

function isValidDate(date: Date) {
  return date instanceof Date && !isNaN(date.valueOf())
}

function parseDate(v:string) : ParseResult {
  const valid = isValid(v);
  const now = new Date();
  if (valid) {
    return {isValid:true, date: parse(v,'YYYY/dd/MM hh:mm aaa', now)}
  } else {
    return {isValid:false, error: 'Please enter a valid date'}
  }
}
export default function SingleEventInput(props:SingleEventInputProps) {
  const key = props.key;
  const [currentValue, updateValue] = useState(props.value);
  function handleDateChange(date:string | null){
    if (date) {
      updateValue(prev=> Object.assign(prev, {date}));
      props.handleChange(key, currentValue);
    }
  }
  return (
    <CommonDateTimeInput readOnly={props.readOnly} value={currentValue.date} formatInputValue={(date:Date) => format(date, 'YYYY/dd/MM hh:mm aaa')} parseInputValue={parseDate} id="date" serialize={serialize} deserialize={deserialize} onChange={handleDateChange}/>
  )
}