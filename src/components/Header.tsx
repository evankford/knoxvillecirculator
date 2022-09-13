import * as React from 'react';
import MenuContext , {type MenuContextModel } from "../store/menuContext"
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import {faBars, faTimes} from  "@fortawesome/pro-solid-svg-icons"


const Wrap = styled.header`
  width: 100%;
  position: absolute;

`;

const Inner = styled.div`
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px;
  color: var(--color-white);
`

const B = styled.button`
  appearance: none;
  background: none;
  color: white;
  border: none;
  font-size: 22px;
`


export default function Header() {
    const {isOpen, toggle} = React.useContext(MenuContext);
    let Icon = <FontAwesomeIcon icon={faBars}/>;
    if (isOpen) {
      Icon = <FontAwesomeIcon icon={faTimes}/>;
    }

    return (
<></>
            // <Wrap>
            //   <Inner>
            //     <B onClick={()=>toggle()}>
            //       {Icon}
            //     </B>
            //   </Inner>
            // </Wrap>

    )
  }
