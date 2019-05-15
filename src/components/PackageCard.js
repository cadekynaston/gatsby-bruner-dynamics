import React, { useState } from "react"
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

const SeeMoreIcon = styled.img`
  margin-left: 3px;
  margin-top: 2px;
  transform: ${props => props.rotateIcon ? 'rotate(180deg)' : 'rotate(0)'};
`
const PackageCard = ({ packageData, noborder }) => {

  const [seeMore, setSeeMore] = useState(false);
  const [packageHover, setPackageHover] = useState(false);

  const packageFeatures = packageData.packageDetails.map((detail, i) =>
    <PackageFeature key={i} details={detail} />
  )

  return (
    <PackageCardElement
      onMouseEnter={() => setPackageHover(true) }
      onMouseLeave={() => setPackageHover(false) }
      noborder={noborder} >
      <PackageName hovered={packageHover} >{packageData.name}</PackageName>
      <PriceComponent
        priceDollars={packageData.priceDollars}
        priceCents={packageData.priceCents} />
      <PriceDetails hovered={packageHover} >{packageData.priceTerms}</PriceDetails>
      <PackageFeatureContainer
        seeMore={seeMore}>
        <ColorLine hovered={packageHover}/>
        {packageFeatures}
      </PackageFeatureContainer>
      <PackageOrderButton
        bgColor={packageHover ? theme.colors.green: theme.colors.blue}
        buttonText={packageData.buttonText} />
      <SeeMoreButton onClick={() => setSeeMore(!seeMore) }>
        {seeMore ? 'See Less' : 'See More'}
        <SeeMoreIcon src={seeMoreIcon} rotateIcon={seeMore} />
      </SeeMoreButton>
    </PackageCardElement>
  )
}

export default PackageCard
