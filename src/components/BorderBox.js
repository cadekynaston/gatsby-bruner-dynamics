import React from "react"
import styled from "@emotion/styled"

import { theme, media } from '../styles'

const BorderBoxContainer = styled.div`
  padding: 0 15px 15px 15px;
  border-left: 2px solid ${theme.colors.blue};
  height: 100%;

  ${media.medium} {
    border-left: 0;
  }

  ${media.small} {
    padding: 0;
  }
`

const Title = styled.h3`
  color: ${theme.colors.blue};
  font-size: 32px;

  ${media.medium} {
    padding-bottom: 15px;
    border-bottom: 2px solid ${theme.colors.blue};
  }
`

const BorderBox = ({ title, content }) => (
  <BorderBoxContainer>
    <Title>{title}</Title>
    <p>{content}</p>
  </BorderBoxContainer>
)


export default BorderBox
