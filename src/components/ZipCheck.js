import React, { useState } from 'react'
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

const ZipCheck = () => {

  const [inputValue, updateInputValue] = useState('')
  const [formError, updateFormError] = useState(false)

  const handleChange = event => {
    updateFormError(!/^[0-9]{0,5}$/g.test(event.target.value))
    updateInputValue(event.target.value);
  }

  const handleClick = () => {
    if (inputValue.trim().length !== 5) return
    alert(inputValue);
  }

  return (
    <CenteredDiv>
      <ZipInput formError={formError} value={inputValue} onChange={handleChange} placeholder='Enter Zip' />
      <ConnectButton onClick={handleClick}>
        <HideForMediumUp>See Plans!</HideForMediumUp>
        <HideForSmall>Connect with the Bruner</HideForSmall>
      </ConnectButton>
    </CenteredDiv>
  )

}

export default ZipCheck
