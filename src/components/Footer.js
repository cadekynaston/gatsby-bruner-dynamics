import React from "react"
import styled from "@emotion/styled"

import Image from './image'
import logoColor from '../images/bruner-logo-color.svg'
import { theme, Container, Row, media } from '../styles'

const StyledRow = styled(Row)`
  background-color: transparent;
`

const StyleContainer = styled(Container)`
  padding-top: 0;
`

const FooterLogo = styled.img`
  height: 65px;
  width: 185px;
  margin-bottom: 15px;
`

const FooterLine = styled.div`
  height: 1px;
  width: 320px;
  margin-bottom: 20px;
  background-color: ${theme.colors.green};
`

const FooterCTA = styled.h4`
  font-family: ${theme.fonts.MavenPro};
`

const FooterTerms = styled.div`
  display: flex;
  margin-top: 10px;

  p {
    margin-right: 10px;
  }
`

const Footer = () => (
  <>
    <StyledRow>
      <StyleContainer>
        <FooterLogo src={logoColor} />
        <FooterLine />
        <FooterCTA>Order Now</FooterCTA>
        <FooterCTA className='heavy'>1.888.888.8888</FooterCTA>
        <FooterTerms>
          <p className='legal'>© 2019. All rights reserved</p>
          <p className='legal'>Privacy Policy   |   Terms & Conditions</p>
        </FooterTerms>
      </StyleContainer>
    </StyledRow>
    <Image filename={'footer-bg.png'} classes='footer-bg-image' />
  </>
)


export default Footer
