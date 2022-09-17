
import React, {Component, useState, type ComponentProps, type ReactNode} from "react";
import MenuContext from "../store/menuContext";
import "normalize.css";
import "../css/base.scss";

import Header from "../components/Header"
import Footer from "../components/Footer"
import Signup from "./sections/Signup";
type LayoutProps = {
  children: ReactNode
  hideSignup?:true
}

export default function Layout(props:LayoutProps){
  const [isOpen, setOpen]= useState(false);


  function toggle() {
    setOpen(isOpen);
  }
  return (
    <MenuContext.Provider value={{ isOpen, toggle }}>
      <Header />
      { props.children }

      {/* <BaseStyles/> */}
      { !props.hideSignup &&
        <Signup/>
      }
      <Footer />
    </MenuContext.Provider>
  );
}
