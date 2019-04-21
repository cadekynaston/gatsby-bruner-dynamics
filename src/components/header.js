import React from "react"
import styled from "@emotion/styled"

import bgImage from '../images/stars-bg.png'
import { theme, Container, Row, media } from '../styles'
import ZipCheck from './ZipCheck'

const StyledRow = styled(Row)`
  background-color: ${theme.colors.pink};
  background-image: url(${bgImage});
  background-size: cover;

`

const StyledContainer = styled(Container)`
  padding-top: 120px;
`

const StyledHeader = styled.header`
  text-align: center;
`

const StyledH1 = styled.h1`
  max-width: 830px;
  margin: 0 auto;
  margin-bottom: 30px;

  ${media.medium} {
    max-width: none;
  }
`

const SubHeading = styled.p`
  margin-bottom: 30px;
  text-align: center;
  color: ${theme.colors.white};

  ${media.medium} {
    text-align: left;
  }
`

const Header = () => (
  <StyledRow>
    <StyledContainer>
      <StyledHeader>
        <StyledH1>
          Discover Brüner Satellite Internet Bundles
        </StyledH1>
        <SubHeading>
          Jimmy B is here to make the world a better place, one connection at a time.
        </SubHeading>
        <ZipCheck />
      </StyledHeader>
    </StyledContainer>
  </StyledRow>
)


export default Header
