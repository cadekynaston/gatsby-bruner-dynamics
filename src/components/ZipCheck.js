import React from 'react'
import styled from '@emotion/styled'

import { theme, media } from '../styles'

const CenteredDiv = styled.div`
 margin: 0 auto;

 ${media.medium} {
    width: 450px;
  }

  ${media.small} {
    width: 300px;
  }
`

const ZipInput = styled.input`
  padding: 10px 25px;
  font-size: 16px;
  color: ${props => props.formError ? theme.colors.red : theme.colors.dark };
  border-radius: 5px 0 0 5px;
  margin: 0;
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
  margin: 0;

  &:hover {
    cursor: pointer;
  }

  ${media.medium} {
    width: 50%;
    padding: 10px;
  }
`

const HideForSmall = styled.div`
  display: block;
  white-space: nowrap;

  ${media.small} {
    display: none;
  }
`

const HideForMediumUp = styled.div`
  display: none;
  white-space: nowrap;

  ${media.small} {
    display: block;
  }
`

class ZipCheck extends React.Component {

  constructor() {
    super()

    this.state = {
      inputValue: '',
      formError: false,
    }
  }

  handleChange = event => {

    this.setState({formError: !/^[0-9]{0,5}$/g.test(event.target.value)})
    this.setState({inputValue: event.target.value});
  }

  handleClick = () => {
    if (this.state.inputValue.trim().length !== 5) return
    alert(this.state.inputValue);
  }



  render() {
    return (
      <CenteredDiv>
        <ZipInput formError={this.state.formError}  value={this.state.inputValue} onChange={this.handleChange} placeholder='Enter Zip' />
        <ConnectButton onClick={this.handleClick}>
          <HideForMediumUp>See Plans!</HideForMediumUp>
          <HideForSmall>Connect with the Bruner</HideForSmall>
        </ConnectButton>
      </CenteredDiv>
    )
  }
}

export default ZipCheck
