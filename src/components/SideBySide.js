import React from "react"
import styled from "@emotion/styled"

import Image from './image'
import { media, Row, Container } from '../styles'

const SidebySideContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ContentContainer = styled.div`
  width: 50%;

  ${media.medium} {
    width: 100%;
  }
`

const ImageContainer = styled.div`
  text-align: center;
  width: 50%;
  ${media.medium} {
    width: 100%;
    margin-bottom: 15px;
  }
`

const SideBySide = ({ bgColor, image, children}) => {

  return (
    <Row bgColor={bgColor}>
      <Container>
        <SidebySideContainer>
          <ImageContainer>
            <Image filename={image} classes='gatsby-sbs-image' />
          </ImageContainer>
          <ContentContainer>
            {children}
          </ContentContainer>
        </SidebySideContainer>
      </Container>
    </Row>
  )
}

export default SideBySide
