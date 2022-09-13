
import * as React from "react";
import MenuContext from "../store/menuContext";
import "normalize.css";
import "../css/base.scss";

import Header from "../components/Header"
import Footer from "../components/Footer"
import BaseStyles from "../globalStyles";
type LayoutProps = {
  children: JSX.Element[]
}

type MenuState = {
    isOpen:boolean,
}

class Layout extends React.Component   {
  children: JSX.Element[];
  toggleMenu: ()=>void
  state: MenuState

constructor(props:LayoutProps) {
    super(props)
    this.children = props.children;

    this.state = {
      isOpen: false
    };

    this.toggleMenu = () => {
      console.log("Toggling menu?");
      this.setState((state:MenuState)=>({
        isOpen: !state.isOpen,
      }));
    }
  }

  render() {
    return (
      <MenuContext.Provider value={{ isOpen: this.state.isOpen, toggle: this.toggleMenu }}>
        <Header />
        { this.children }

        {/* <BaseStyles/> */}
        <Footer />
      </MenuContext.Provider>
    );
  }
}

export default Layout;