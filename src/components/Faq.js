import React from "react"
import styled from "@emotion/styled"

import open from '../images/open.svg'
import close from '../images/close.svg'
import { theme, media } from '../styles'

const FaqContainer = styled.div`
  max-width: 650px;
  margin: 0 auto 15px;
`

const FaqTitle = styled.h5`
  padding: 18px 50px 18px 23px;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &::after {
    position: absolute;
    right: 15px;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 20px;
    width: 20px;
    background-image: url(${props => props.open ? close : open});
    background-repeat: no-repeat;
    background-position: center center;
    content: '';
  }
`

const FaqContent = styled.p`
  display: ${props => props.open ? 'block' : 'none'};
  padding: 30px 55px;
  background-color: ${theme.colors.lightGray};
  border-radius: 0 0 10px 10px;

  ${media.small} {
    padding: 20px;
  }
`

class Faq extends React.Component {

  constructor() {
    super()

    this.state = {
      open: false,
    }
  }

  handleClick = () => {

    this.setState(prevState => ({
      open: !prevState.open,
    }))
  }

  render() {
    return (
      <FaqContainer>
        <FaqTitle
          open={this.state.open}
          onClick={this.handleClick}>
          {this.props.data.question}
        </FaqTitle>
        <FaqContent open={this.state.open}>
          {this.props.data.answer}
        </FaqContent>
      </FaqContainer>
    )
  }
}


export default Faq
