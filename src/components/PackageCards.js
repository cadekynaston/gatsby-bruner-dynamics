import React from "react"
import styled from '@emotion/styled'

import { Container, Row } from '../styles'
import PackageCard from './PackageCard'
import Columns from './Columns'

const PackageCardLegalContainer = styled.div`
  margin-top: 30px;
`

const PackageCardLegal = styled.p`
  max-width: 850px;
  margin: 0 auto;
  margin-bottom: 10px;
`

const PackageCards = ({ packageData }) => {

  // don't show right border on the last package card using the noborder prop
  let packagesJSX = Object.keys(packageData).map((key, i, arr) =>
    <PackageCard key={i} packageData={packageData[key]} noborder={i === arr.length-1} />
  );

  return (
    <Row>
      <Container>
        <h2>Brüner’s Best Plans:</h2>
        <Columns>
          {packagesJSX}
        </Columns>
        <PackageCardLegalContainer>
          <PackageCardLegal className="legal">*Does not include The Patriot (2000) for obvious reasons. Independence Day and Red Dawn count, but not the re-makes. Each viewing of either Rocky IV, Iron Eagle, or Top Gun will result in a $5 credit to your account which will be applied to your subsequent bill. </PackageCardLegal>
          <PackageCardLegal className="legal">**Ralph can’t come on Tuesday nights. Bowling league.</PackageCardLegal>
          <PackageCardLegal className="legal">†Badminton match must be within a 45 mile radius of Ogden, UT. </PackageCardLegal>
        </PackageCardLegalContainer>
      </Container>
    </Row>
  )
}

export default PackageCards
