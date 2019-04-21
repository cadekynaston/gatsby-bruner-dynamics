import React from "react"
import styled from "@emotion/styled"

import Image from '../components/Image'
import { theme, Container, Row, media } from '../styles'
import ZipCheck from './ZipCheck'

const StyledRow = styled(Row)`
  position: relative;
  padding-left: 0;
  padding-right: 0;
`

const AbsoluteBgContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
  position: absolute;

`

const StyledContainer = styled(Container)`
  padding-top: 120px;
  position: relative;
`

const StyledHeader = styled.header`
  text-align: center;
  padding-left: .975rem;
  padding-right: .975rem;
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

const Header = ({ bgImage }) => (
  <StyledRow>
    <AbsoluteBgContainer>
      <Image filename={bgImage} classes='gatsby-header-img' />
    </AbsoluteBgContainer>
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
