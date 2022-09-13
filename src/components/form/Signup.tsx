import React, {Component, createRef, type FormEvent, type ChangeEvent, useRef, MutableRefObject} from "react";
import styled from "styled-components";
import EmailInput from "./EmailInput";
import ArrowSubmit from "./ArrowSubmit";
import ConsentCheckbox from "./ConsentCheckbox";

import { validate } from "email-validator";
import FocusWrapper from "./FocusWrapper";
import FormErrors from "./FormErrors";
import ValidationErrors from "./ValidationErrors";



const Form = styled.form`
flex: 1 1 auto;
/* display: flex; */
max-width: 370px;
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
  margin: 0 12px 0 0;
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

interface SignupFormState {
  submitted: boolean,
  success:boolean,
  submitting: boolean,
  emailValue: string
  errorMessage: string | undefined
  emailValid: boolean;
  consentAccepted: boolean
  consentText: undefined | string
  consentUrl:  undefined | string
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
      emailValue: '',
      emailValid: false,
      errorMessage: undefined,
      consentAccepted: false,
      consentText: "Yep! Send me around 1 email a month. " ,
      consentUrl:  'https://circulatorknoxville.com/privacy'
    }


    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleConsentChange = this.handleConsentChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }




  updateState(key: 'string', value: boolean| string){
  }


  async handleSubmit(evt:FormEvent<HTMLFormElement>) {
    console.log('Submitting');
    this.setState(prev=>Object.assign(prev, { success:false, submitted: true, submitting: true,errorMessage:undefined}));
    evt.preventDefault();
    if (this.state.emailValid && this.state.consentAccepted) {
      console.log("Trying to submit ")
      // try to submit
    }

    const resp = await fetch(`/api/signup/${this.state.emailValue}`);
    const j:{success: boolean} = await resp.json();

    if (j.success == true ){
      this.setState(prev=>Object.assign(prev, { success:true, submitted: true, submitting: false, errorMessage:undefined}));
      return;
    } else {
      this.setState(prev=>Object.assign(prev, { success:false, submitted: true, submitting: false, errorMessage:"Something went wrong. Please try again."}));
      console.log(j)
      return;
    }
  }

  handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState((prev)=> {
      return Object.assign(prev,{ changed: true, emailValue: e.target.value, emailValid: validate(e.target.value)});
    });
  }
  handleConsentChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState((prev)=> {
      return Object.assign(prev, {changed: true, consentAccepted: e.target.checked});
    });
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
          <Form onSubmitCapture={this.handleSubmit}>
            <Line>
              <EmailInput focusElRef={this.inputRef} hasError={this.state.submitted && !this.state.emailValid} handleChange={this.handleEmailChange} value={this.state.emailValue}/>
              <ArrowSubmit submitting={this.state.submitting} />
            </Line>
              <ConsentCheckbox hasError={this.state.submitted && !this.state.consentAccepted} handleChange={this.handleConsentChange} consentText={this.state.consentText} consentUrl={this.state.consentUrl} consentLinkText="That's all we do with your data."/>
          </Form>

      </FocusWrapper>
      <FormErrors errorMessage={this.state.errorMessage}/>
      <ValidationErrors submitted={this.state.submitted} consentAccepted={this.state.consentAccepted} validEmail={this.state.emailValid}/>
      </>
    );
  }
}

export default SignupForm;