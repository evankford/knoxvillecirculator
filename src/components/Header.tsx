import * as React from 'react';
import MenuContext , {type MenuContextModel } from "../store/menuContext"
import styled from 'styled-components';
import Svg from "../images/bandp.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import {faBars, faTimes} from  "@fortawesome/pro-solid-svg-icons"


const Wrap = styled.header`
  width: 100%;
  position: absolute;
  z-index:  1000;
`;

const Inner = styled.div`
  max-width: 1400px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 12px;
  color: var(--color-white);
`

const B = styled.button`
  appearance: none;
  color: var(--color-pink);
  background: var(--color-seafoam);

  border: none;
  font-size: 20px;
  height: 44px;
  margin-left: auto;
  width:44px;
`;

const Logo  = styled.a`
  text-decoration: none;
  flex: 0 0 120px;
`;


export default function Header(props:{hideLogo?:boolean|undefined}) {
    const {isOpen, toggle} = React.useContext(MenuContext);
    let Icon = <FontAwesomeIcon icon={faBars}/>;
    if (isOpen) {
      Icon = <FontAwesomeIcon icon={faTimes}/>;
    }

    return (
      <Wrap>
        <Inner>
          {!props.hideLogo &&
        <Logo href="/">
        <Svg/>
        </Logo>
          }
          {/* <B onClick={()=>toggle()}>
            {Icon}
          </B> */}
        </Inner>
      </Wrap>

    )
  }
