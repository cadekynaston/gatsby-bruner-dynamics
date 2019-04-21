import React from 'react'
import styled from '@emotion/styled'

import { theme, media } from '../styles'

const CenteredDiv = styled.div`
 margin: 0 auto;
 ${media.medium} {
    width: 300px;
  }
`

const ZipInput = styled.input`
  padding: 10px 25px;
  font-size: 16px;
  border-radius: 5px 0 0 5px;
  border: 0;
  ${media.medium} {
    width: 50%;
    padding: 10px;
  }
`

const ConnectButton = styled.button`
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  padding: 10px 40px;
  font-size: 16px;
  border-radius: 0 5px 5px 0;
  border: 0;

  &:hover {
    cursor: pointer;
  }

  ${media.medium} {
    width: 50%;
    padding: 10px;
  }
`

class ZipCheck extends React.Component {

  constructor() {
    super()

    this.state = {
      windowWidth: false,
    }
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.setState({
      windowWidth: window.innerWidth
    })
  }


  render() {
    return (
      <CenteredDiv>
        <ZipInput type="text" placeholder='Enter Zip' />
        <ConnectButton>
          {this.state.windowWidth && this.state.windowWidth < theme.mediaSizes.medium
            ? 'See Plans!'
            : 'Connect with the Bruner' }
        </ConnectButton>
      </CenteredDiv>
    )
  }
}

export default ZipCheck
