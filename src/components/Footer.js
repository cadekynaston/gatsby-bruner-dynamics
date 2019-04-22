import React from "react"
import styled from "@emotion/styled"

import footerBgImage from '../images/footer-bg.png'
import logoColor from '../images/bruner-logo-color.svg'

import { theme, Container, Row, media } from '../styles'

const StyledRow = styled(Row)`
  background-image: url(${footerBgImage});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  padding-bottom: 250px;

  ${media.medium} {
    padding-bottom: 100px;
    background-size: contain;
    background-position: bottom;
  }

  ${media.small} {
    padding-bottom: 70px;
  }
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
  <StyledRow>
    <Container>
      <FooterLogo src={logoColor} />
      <FooterLine />
      <FooterCTA>Order Now</FooterCTA>
      <FooterCTA className='heavy'>1.888.888.8888</FooterCTA>
      <FooterTerms>
        <p className='legal'>© 2019. All rights reserved</p>
        <p className='legal'>Privacy Policy   |   Terms & Conditions</p>
      </FooterTerms>
    </Container>
  </StyledRow>
)


export default Footer
