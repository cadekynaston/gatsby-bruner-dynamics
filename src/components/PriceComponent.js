import React from "react"
import styled from "@emotion/styled"

import { theme } from '../styles'

const Price = styled.h3`
  font-size: 36px;
  position: relative;
  margin: 0;
  font-family: ${theme.fonts.MavenPro};
  font-weight: 300;
`

const PriceCents = styled.sup`
  font-size: 20px;
  font-weight: 600;
  position: relative;
  top: 2px;
`

const PriceMonths = styled.sub`
  font-size: 20px;
  font-weight: 600;
  position: relative;
  top: -5px;
`

const PriceComponent = (props) => (
  <Price>
    {props.priceDollars}
    <PriceCents>{props.priceCents}</PriceCents>/
    <PriceMonths>mo</PriceMonths>
  </Price>
)


export default PriceComponent
