import { createContext } from "react";

export type MenuContextModel = {
  isOpen: boolean,
  toggle: ()=>void,
}

const menuContext = createContext<MenuContextModel>({
  isOpen: false,
  toggle: ()=> {},
});

export default menuContext;
