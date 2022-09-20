import React, {Component, createRef, type FormEvent, type ChangeEvent, useRef, MutableRefObject} from "react";
import styled from "styled-components";
import EmailInput from "./EmailInput";
import ArrowSubmit from "./ArrowSubmit";
import TagSelector from "./TagSelector";

import { validate } from "email-validator";
import FocusWrapper from "./FocusWrapper";
import FormErrors from "./FormErrors";
import ValidationErrors from "./ValidationErrors";



const Form = styled.form`
flex: 1 1 auto;
/* display: flex; */
max-width: 370px;
transition: opacity 200ms ease;
&.disabled{
  opacity: 0.6;
  pointer-events: none;
}
/* flex-wrap: wrap; */
`
const Line = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex: 1 1 300px;
  max-width: calc(300px + 4vw);
  border-bottom: 2px solid currentColor;
  position: relative;
  padding: 10px 0 2px 0;
  margin: 0 0 0 0;
    /* @media screen and (min-width: 1000px) {
      padding-left: calc(100px  + 4vw);
    } */
  overflow: hidden;
  &::after {
    position: absolute;
    content:'';
    display: block;
    top: 100%;
    width: 100%;
    background: white;
    height: 2px;
    left: 0;
    transition: opacity 200ms ease, transform 200ms ease;
  }
  &:focus-within {
     &::after {
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`

const P = styled.p`
  margin: 10px 0;
  font-size: 15px;
  font-weight: 300;
  a { color: inherit; font-family:'FlexaEx'; font-weight:500;}
`

interface SignupFormState {
  submitted: boolean,
  success:boolean,
  submitting: boolean,
  emailValue: string
  errorMessage: string | undefined
  tags:Array<'newsletter' | 'events'>
  emailValid: boolean;
}


class SignupForm extends Component {
  state:SignupFormState
  inputRef: MutableRefObject<HTMLInputElement | null>
  constructor(props:any) {
    super(props);

    this.inputRef = createRef();

    this.state = {
      success: false,
      submitted: false,
      submitting: false,
      tags:['newsletter'],
      emailValue: '',
      emailValid: false,
      errorMessage: undefined,
    }


    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleTagsChange = this.handleTagsChange.bind(this)
  }




  updateState(key: 'string', value: boolean| string){
  }


  async handleSubmit(evt:FormEvent<HTMLFormElement>) {
    console.log('Submitting');
    evt.preventDefault();
    this.setState(prev=>Object.assign(prev, { success:false, submitted: true, submitting: true,errorMessage:undefined}));
    if (this.state.emailValid && this.state.tags.length> 0) {
      console.log("Trying to submit ")
      this.setState(prev=>Object.assign(prev, { submitting: true }));
      // try to submit
      const resp = await fetch(`/api/signup/${this.state.emailValue}`, {
        method: "POST",
        body: JSON.stringify({tags: this.state.tags}),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      const j:{success: boolean} = await resp.json();

      if (j.success == true ){
        this.setState(prev=>Object.assign(prev, { success:true, submitted: true, submitting: false, errorMessage:undefined}));
        return;
      } else {
        this.setState(prev=>Object.assign(prev, { success:false, submitted: true, submitting: false, errorMessage:"Something went wrong. Please try again."}));
        console.log(j)
        return;
      }
    } else {
        this.setState(prev=>Object.assign(prev, { success:false, submitted: true, submitting: false, errorMessage:undefined}));
      return;
    }

  }

  handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState((prev)=> {
      return Object.assign(prev,{ changed: true, emailValue: e.target.value, emailValid: validate(e.target.value)});
    });
  }


  handleTagsChange(e:ChangeEvent<HTMLInputElement>) {
    if (!e.target ||  !e.target.id || !['newsletter','events'].includes(e.target.id)) {
      return;
    }
    this.setState((prev:SignupFormState)=>{
      let tags = prev.tags;
      console.log(e.target.id, e.target.checked)
       if (!e.target ||  !e.target.id || (e.target.id != 'events' && e.target.id != 'newsletter')) {
          return prev;
        }
      if (e.target.checked ) {
        if(tags.includes(e.target.id)){
          return prev
        }
        tags.push(e.target.id);
      } else {
        if (!tags.includes(e.target.id)){
          return prev
        }
        tags.splice(tags.indexOf(e.target.id), 1);
      }
      return Object.assign(prev, {tags});
    })
  }





  render() {

    if (this.state.success){
      return (
      <FocusWrapper toFocus={this.inputRef} >
        <h2>You're In!</h2>
      </FocusWrapper>
      )
    }
    return (
      <>
      <FocusWrapper toFocus={this.inputRef}>
          <Form onSubmitCapture={this.handleSubmit} className={this.state.submitting ? 'disabled' : ''}>
            <Line>
              <EmailInput focusElRef={this.inputRef} hasError={this.state.submitted && !this.state.emailValid} handleChange={this.handleEmailChange} value={this.state.emailValue}/>
              <ArrowSubmit submitting={this.state.submitting} />
            </Line>
              <TagSelector handleChange={this.handleTagsChange} tags={this.state.tags}/>
              <P>We send a few emails a month. <a href="/privacy">That's it.</a></P>
          </Form>
      </FocusWrapper>
      <FormErrors errorMessage={this.state.errorMessage}/>
      <ValidationErrors submitted={this.state.submitted} validEmail={this.state.emailValid}/>
      </>
    );
  }
}

export default SignupForm;