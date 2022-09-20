import React,  {useCallback, useEffect, useState} from 'react'
import {TextInput,Stack, useTheme, Label, Flex, Text, Button, studioTheme, ThemeProvider, } from '@sanity/ui';
import {type ArrayOfObjectsInputProps, set, unset, setIfMissing, insert, FormFieldValidationStatus} from 'sanity/form'

import {AddIcon, RevertIcon} from '@sanity/icons';
import {ArraySchemaType} from 'sanity';
import SingleEventInput from './SingleEventInput';

export type SingleEventDetail = {
  _type:'singleEventDetail',
  _key: string
  active: boolean,
  location?: string,
  subtitle?:string,
  date:string,
  url: string,
}

type EventDetailsArray = ArraySchemaType & {
  of:[SingleEventDetail]
}

type EventDetailsFormProps = ArrayOfObjectsInputProps<SingleEventDetail, EventDetailsArray>


export default function EventDetailsForm (props:EventDetailsFormProps) {
  const {onChange,members, value, readOnly} = props;

  useTheme();

  function handleInputChange(v: SingleEventDetail) {
    if (value) {
    let newVal = value;
      let existingIndex = value.findIndex(k=> k._key === v._key);
      if (existingIndex) {
        newVal[existingIndex] = v;
      }
      return onChange(set(newVal));
    }
    return onChange(set(value));
  }

  const handleReset = useCallback(() => {
    onChange(set([]));
  }, [onChange])

  return(
    <Stack space={[2,2,2,1]}>
        {value && members?.length > 0
        ? members.map((member, memberIndex) => (
            <React.Fragment key={member.key}>
              {value[memberIndex] ? (
                <SingleEventInput value={value[memberIndex]} readOnly={readOnly} handleChange={handleInputChange} />
              ) : null}
            </React.Fragment>
            )) : null}
      )

    </Stack>
  )

}