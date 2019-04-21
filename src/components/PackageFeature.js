import React from "react"
import styled from "@emotion/styled"

import { theme } from '../styles'
import icon from '../images/icon-dollar.png'

const PackageDetailContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const PackageDetailIcon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`

const PackageDetailTitle = styled.p`
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 3px;
`

const PackageDetailSubtitle = styled.p`
  color: ${theme.colors.gray};
  font-size: 10px;
  line-height: 10px;
`


const PackageFeature = props => (
  <PackageDetailContainer>
    <PackageDetailIcon src={require(`../images/${props.details.img}`)} />
    <div>
      <PackageDetailTitle>
        {props.details.title}
      </PackageDetailTitle>
      <PackageDetailSubtitle>
        {props.details.subtitle}
      </PackageDetailSubtitle>
    </div>
  </PackageDetailContainer>
)


export default PackageFeature
