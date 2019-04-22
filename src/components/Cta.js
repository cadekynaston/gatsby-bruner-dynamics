import React from "react"
import styled from "@emotion/styled"

import { theme, Container, Row, media } from '../styles'

const StyledContainer = styled(Container)`
  position: relative;
  padding-top: 45px;
  padding-bottom: 60px;

  &::before {
    background-color: ${props => props.bgColor};
    position: absolute;
    left: 0;
    right: 0;
    top: -13px;
    margin: auto;
    height: 26px;
    width: 26px;
    transform: rotate(45deg);
    content: '';
  }

  ${media.small} {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

const MediumCta = styled.div`

  ${media.small} { display: none; }

`

const SmallCta = styled.div`
  display: none;

  a {
    text-align: center;
    color: ${theme.colors.white}
  }

  ${media.smallOnly} {
    display: block;
  }

`

const CtaButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 45px;
  border: 0;
  background-color: ${theme.colors.white};
  color: ${theme.colors.blue};
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  height: 45px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  &:hover {
    cursor: pointer;
  }
`

const Cta = ({ bgColor }) => (
  <Row bgColor={bgColor}>
    <StyledContainer bgColor={bgColor}>

      <MediumCta>
      <h3 className='white text-center'>Get Connected With Brüner Dynamics Today. </h3>
        <a href='tel:1.888.888.8888'>
          <CtaButton>
            Call 1.888.888.8888
          </CtaButton>
        </a>
      </MediumCta>
      <SmallCta>
        <h3 className='white text-center no-margin-bottom'>
          <a href='tel:1.888.888.8888'>
            Click to Call<br/>
          <span className='heavy'>
            1.888.888.8888
          </span>
          </a>
        </h3>

      </SmallCta>
    </StyledContainer>
  </Row>
)


export default Cta
