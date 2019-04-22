import React from "react"
import styled from "@emotion/styled"

import PriceComponent from './PriceComponent'
import PackageFeature from './PackageFeature'
import PackageOrderButton from './PackageOrderButton'
import seeMoreIcon from '../images/see-more-icon.svg'
import { theme, media } from '../styles'

const PackageCardElement = styled.div`
  padding: 15px;
  width: 100%;
  position: relative;
  border-right: ${props => props.noborder ? 'none' : `1px solid ${theme.colors.borderGray}` };

  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }

  ${media.medium} {
    border-right: none;
  }

  ${media.small} {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    padding: 30px;

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
  margin-top: -8px;
`

const SeeMoreButton = styled.p`
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  top: 30px;
  right: 30px;
  display: none;

  &:hover {
    cursor: pointer;
  }

  ${media.small} {
    display: flex;
    align-items: center;
  }
`

const SeeMore = styled.img`
  margin-left: 3px;
  margin-top: 2px;
  transform: ${props => props.seeMore ? 'rotate(180deg)' : 'rotate(0)'};
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
    const packageFeatures = packageData.packageDetails.map((detail, i) => <PackageFeature key={i} details={detail} />)

    return (
      <PackageCardElement
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        noborder={this.props.noborder} >
        <PackageName hovered={this.state.packageHover} >{packageData.name}</PackageName>
        <PriceComponent
          priceDollars={packageData.priceDollars}
          priceCents={packageData.priceCents} />
        <PriceDetails hovered={this.state.packageHover} >{packageData.priceTerms}</PriceDetails>
        <PackageFeatureContainer
         seeMore={this.state.seeMore}>
          <ColorLine hovered={this.state.packageHover}/>
          {packageFeatures}
        </PackageFeatureContainer>
        <PackageOrderButton
          bgColor={this.state.packageHover ? theme.colors.green: theme.colors.blue}
          buttonText={packageData.buttonText}/>

        <SeeMoreButton onClick={this.handleSeeMore}>
          {this.state.seeMore ? 'See Less' : 'See More'}
          <SeeMore src={seeMoreIcon} seeMore={this.state.seeMore} />
        </SeeMoreButton>
      </PackageCardElement>
    )
  }
}


export default PackageCard
