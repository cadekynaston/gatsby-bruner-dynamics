import React from "react"
import styled from "@emotion/styled"

import PriceComponent from './PriceComponent'
import PackageFeature from './PackageFeature'
import PackageOrderButton from './PackageOrderButton'
import { theme, media } from '../styles'

const PackageCardElement = styled.div`
  padding: 15px;
  width: 100%;
  position: relative;
  /* border-right: 1px solid ${theme.colors.borderGray}; */

  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }

  ${media.small} {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
`

const PackageName = styled.p`
  color: ${props => props.hovered ? theme.colors.green: theme.colors.blue};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`

const ColorLine = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  border-bottom: 1px solid ${props => props.hovered ? theme.colors.green: theme.colors.blue};
`

const PackageFeatureContainer = styled.div`
  height: 138px;

  ${media.small} {
    display: ${props => props.seeMore ? 'block' : 'none'};
  }
`

const PriceDetails = styled.p`
  color: ${theme.colors.gray};
  font-size: 14px;
`

const SeeMoreButton = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
  display: none;

  &:hover {
    cursor: pointer;
  }

  ${media.small} {
    display: block;
  }
`


class PackageCard extends React.Component {

  constructor() {
    super()

    this.state = {
      packageHover: false,
      seeMore: false,
    }
  }

  handleMouseEnter = () => {
    this.setState({
      packageHover: true
    })
  }

  handleMouseLeave = () => {
    this.setState({
      packageHover: false
    })
  }

  handleSeeMore = () => {
    this.setState(prevState => ({ seeMore: !prevState.seeMore }))
  }

  render() {

    const packageData = this.props.packageData

    return (
      <PackageCardElement
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave} >
        <PackageName hovered={this.state.packageHover} >{packageData.name}</PackageName>
        <PriceComponent
          priceDollars={packageData.priceDollars}
          priceCents={packageData.priceCents} />
        <PriceDetails hovered={this.state.packageHover} >{packageData.priceTerms}</PriceDetails>
        <PackageFeatureContainer
         seeMore={this.state.seeMore}>
          <ColorLine hovered={this.state.packageHover}/>
          <PackageFeature details={packageData.packageDetails[0]} />
          <PackageFeature details={packageData.packageDetails[1]} />
          <PackageFeature details={packageData.packageDetails[2]} />
        </PackageFeatureContainer>
        <PackageOrderButton
          bgColor={this.state.packageHover ? theme.colors.green: theme.colors.blue}
          buttonText={packageData.buttonText}/>

        <SeeMoreButton onClick={this.handleSeeMore}>
          {this.state.seeMore ? 'See Less' : 'See More'}
        </SeeMoreButton>
      </PackageCardElement>
    )
  }
}


export default PackageCard
