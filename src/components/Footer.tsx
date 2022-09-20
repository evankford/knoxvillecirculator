import * as React from 'react';
import styled from 'styled-components';
import SignupForm from './form/SignupForm';

const FWrap = styled.footer`
  padding: 30px;
  box-sizing: border-box;
  background: var(--color-black);
  color: var(--color-whiteGreen);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-evenly;
  z-index: 100;
`;

const Col= styled.div`
  flex: 1 1 300px;
  max-width: 480px;
  margin: 20px calc(20px + 2vw);
`

export default function Footer() {
  return (
      <FWrap >
        <Col>
          <SignupForm/>
        </Col>
        <Col>
          © { new Date().getFullYear()} Knoxville Circulator. All rights reserved.
        </Col>
      </FWrap>
  )
}

