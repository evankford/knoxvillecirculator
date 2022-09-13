import { createContext } from "react";

export interface FooterContextModel {
  consentHeight:number,
  setConsentHeight: (arg0:number)=>void
  isOpen: boolean
  toggleOpen: ()=>void;

}

const footerContext = createContext<FooterContextModel>({
  consentHeight: 0,
  isOpen: false,
  toggleOpen: ()=>{},
  setConsentHeight:()=>{}
})

export default footerContext;