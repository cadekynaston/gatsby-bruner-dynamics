import React from "react"
import styled from "@emotion/styled"

import { theme, media } from '../styles'

const ContentBoxContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  height: 100%;
  background-color: ${theme.colors.white};

  ${media.mediumUp} {
    margin: 15px;
  }
`

const Title = styled.h3`
  color: ${theme.colors.white};
  background-color: ${theme.colors.blue};
  border-radius: 10px 10px 0 0;
  font-size: 32px;
  padding: 15px 30px;
  margin-bottom: 0;

  ${media.medium} {
    padding-bottom: 15px;
    border-bottom: 1px solid ${theme.colors.blue};
  }
`

const Content = styled.p`
  background-color: ${theme.colors.white};
  border-radius: 0 0 10px 10px;
  padding: 30px;

`

const BorderBox = ({ data }) => (
  <ContentBoxContainer>
    <Title>{data.title}</Title>
    <Content>{data.content}</Content>
  </ContentBoxContainer>
)


export default BorderBox
