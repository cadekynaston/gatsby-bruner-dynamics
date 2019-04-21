import React from "react"

import { Container, Row } from '../styles'

const BasicContent = ({ bgColor, bgImage, children }) => (
  <Row bgColor={bgColor}>
    <Container>
      {children}
    </Container>
  </Row>
)

export default BasicContent
