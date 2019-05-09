import React from "react"

import { Container, Row } from '../styles'

const BasicContent = ({ bgColor, children }) => (
  <Row bgColor={bgColor}>
    <Container>
      {children}
    </Container>
  </Row>
)

export default BasicContent
