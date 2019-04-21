import React from "react"
import styled from "@emotion/styled"

import { theme } from '../styles'

const OrderButton = styled.div`
  background-color: ${props => props.bgColor};
  color: ${theme.colors.white};
  padding: 12px 20px;
  border-radius: 0 0 10px 10px;
  margin-top: 20px;
`

const OrderText = styled.p`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.MavenPro};
`

const BoldSpan = styled.span`
  font-weight: 600;
`

const PackageOrderButton = props => (
  <a href='tel:1-888-888-8888'>
    <OrderButton bgColor={props.bgColor} >
      <OrderText>{props.buttonText}</OrderText>
      <BoldSpan>1.888.888.8888</BoldSpan>
    </OrderButton>
  </a>
)


export default PackageOrderButton
