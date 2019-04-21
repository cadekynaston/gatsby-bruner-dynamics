import React from "react"
import styled from "@emotion/styled"

import { media } from '../styles'

const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Column = styled.div`
  width: ${props => props.columnWidth}%;

  ${media.medium} {
    margin-bottom: 10px;
    width: 50%;
  }

  ${media.small} {
    width: 100%;
  }
`

const Columns = ({ children }) => {

  const columnWidth = 100 / children.length

  const ColumnsJSX = children.map((child, i) => (
    <Column columnWidth={columnWidth} key={i}>
      {child}
    </Column>
  ))

  return (
    <ColumnsContainer>
      {ColumnsJSX}
    </ColumnsContainer>
  )
}

export default Columns
