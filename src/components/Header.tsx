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
  justify-content: space-between;
  padding: 12px;
  color: var(--color-white);
`

const B = styled.button`
  appearance: none;
  background: var(--color-magnolia);
  color: var(--color-pink);

  border: none;
  font-size: 22px;
`;

const Logo  = styled.a`
  flex: 0 0 200px;
`;


export default function Header() {
    const {isOpen, toggle} = React.useContext(MenuContext);
    let Icon = <FontAwesomeIcon icon={faBars}/>;
    if (isOpen) {
      Icon = <FontAwesomeIcon icon={faTimes}/>;
    }

    return (
            <Wrap>
              <Inner>
              <Logo>

              </Logo>
                <B onClick={()=>toggle()}>
                  {Icon}
                </B>
              </Inner>
            </Wrap>

    )
  }
