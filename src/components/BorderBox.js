import React from "react"
import styled from "@emotion/styled"

import { theme, media } from '../styles'

const BorderBoxContainer = styled.div`
  padding: 0 15px 15px 15px;
  border-left: 1px solid ${theme.colors.blue};

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
    border-bottom: 1px solid ${theme.colors.blue};
  }
`

const BorderBox = () => (
  <BorderBoxContainer>
    <Title>Easy Care</Title>
    <p>For only $5.99/mo, you can get priority customer support with annual dish relocation, free service calls, and a priority hotline which connects straight to Jimmy’s Pager – faster than a Led Zeppelin guitar solo.  Plus, you can add or cancel Easy Care at anytime. </p>
  </BorderBoxContainer>
)


export default BorderBox
