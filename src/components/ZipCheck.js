import React from 'react'
import styled from '@emotion/styled'
import InputMask from 'react-input-mask';

import { theme, media } from '../styles'

const CenteredDiv = styled.div`
 margin: 0 auto;
 ${media.medium} {
    width: 300px;
  }
`

const ZipInput = styled(InputMask)`
  padding: 10px 25px;
  font-size: 16px;
  border-radius: 5px 0 0 5px;
  border: 0;
  margin: 0;

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
  margin: 0;

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

    let windowWidth = typeof window !== 'undefined' ? window.innerWidth : false;

    this.state = {
      windowWidth,
      inputValue: '',
    }
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  handleChange = event => {
    this.setState({inputValue: event.target.value});
  }

  handleClick = () => {

    if (this.state.inputValue.trim().length !== 5) return
    alert(this.state.inputValue);
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
        <ZipInput mask="99999" value={this.state.inputValue} onChange={this.handleChange} placeholder='Enter Zip' maskChar=" "  />
        <ConnectButton onClick={this.handleClick}>
          {this.state.windowWidth && this.state.windowWidth < theme.mediaSizes.medium
            ? 'See Plans!'
            : 'Connect with the Bruner' }
        </ConnectButton>
      </CenteredDiv>
    )
  }
}

export default ZipCheck
