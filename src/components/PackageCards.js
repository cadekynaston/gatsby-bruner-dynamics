import React from "react"
import styled from '@emotion/styled'

import { Container, Row } from '../styles'
import PackageCard from './PackageCard'
import Columns from './Columns'
import packages from '../data/packages'

const PackageCardLegalContainer = styled.div`
  margin-top: 30px;
`

const PackageCardLegal = styled.p`
  max-width: 850px;
  margin: 0 auto;
  margin-bottom: 10px;
`

const PackageCards = () => (
  <Row>
    <Container>
      <h2>Brüner’s Best Plans:</h2>
      <Columns>
        <PackageCard packageData={packages.standard.pamantha} />
        <PackageCard packageData={packages.standard.elTenEleven} />
        <PackageCard packageData={packages.standard.jimmySpecial} />
        <PackageCard packageData={packages.standard.cultHeroClassic} noborder={true} />
      </Columns>
      <PackageCardLegalContainer>
        <PackageCardLegal className="legal">*Does not include The Patriot (2000) for obvious reasons. Independence Day and Red Dawn count, but not the re-makes. Each viewing of either Rocky IV, Iron Eagle, or Top Gun will result in a $5 credit to your account which will be applied to your subsequent bill. </PackageCardLegal>
        <PackageCardLegal className="legal">**Ralph can’t come on Tuesday nights. Bowling league.</PackageCardLegal>
        <PackageCardLegal className="legal">†Badminton match must be within a 45 mile radius of Ogden, UT. </PackageCardLegal>
      </PackageCardLegalContainer>
    </Container>
  </Row>
)


export default PackageCards
