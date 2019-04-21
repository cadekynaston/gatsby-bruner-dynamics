import React from "react"
import styled from "@emotion/styled"

import { theme, Container, Row } from '../styles'

const Price = styled.h3`
  font-size: 36px;
  margin: 0;
  font-family: ${theme.fonts.MavenPro};
  font-weight: 300;
`

const PriceCents = styled.sup`
  font-size: 20px;
  font-weight: 400;
`

const PriceMonths = styled.sup`
  font-size: 20px;
  font-weight: 400;
`

const PriceComponent = (props) => (
  <Price>
    {props.priceDollars}
    <PriceCents>{props.priceCents}</PriceCents>/
    <PriceMonths>mo</PriceMonths>
  </Price>
)


export default PriceComponent
