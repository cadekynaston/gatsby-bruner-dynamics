import React from 'react'
import styled from '@emotion/styled'

import logoWhite from '../images/bruner-logo-white.svg'
import logoColor from '../images/bruner-logo-color.svg'
import hamburgerMenu from '../images/hamburger.svg'
import close from '../images/close.svg'
import { theme, Container, Row, media } from '../styles'

const StyledRow = styled(Row)`
  height: 60px;
  position: fixed;
  background-color: ${props => props.bgColor};
  z-index: 100;

  ${media.medium} {
    background-color: white;
  }
`

const StyledContainer = styled(Container)`
  padding-top: 0;
  padding-bottom: 0;
`

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  align-items: center;
  max-width: ${theme.maxWidth};
  top: 0;

  ${media.medium} {
    padding-left: 15px;
    padding-right: 15px;
  }
`

const LogoNavContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Logo = styled.img`
  margin-right: 30px;
`

const NavUl = styled.ul`
  color: ${props => props.fontColor};
  display: flex;
  flex-direction: row;
  padding-left: 0;
  list-style-type: none;

  &.open {
    display: flex;
  }

  ${media.medium} {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    background-color: ${theme.colors.white};
    color: ${theme.colors.blue};
    top: 40px;
    left: 0;
    padding-bottom: 20px;
    padding-top: 10px;
  }
`

const NavLi = styled.li`
  padding-left: 0;
  margin-right: 30px;
  margin-bottom: 0;

  &:hover {
    cursor: pointer;
  }

  ${media.medium} {
    padding: 10px 25px;
  }
`

const NavCTA = styled.h4`
  color: ${props => props.fontColor};
  margin: 0;

  ${media.medium} {
    display: none;
  }
`

const NavToggleTrigger = styled.img`
  display: none;

  &:hover {
    cursor: pointer;
  }

  ${media.medium} {
    display: block;
  }
`

const BoldSpan = styled.span`
  font-weight: 600;
`

class Nav extends React.Component {

  constructor() {
    super()

    this.state = {
      windowTop: true,
      windowWidth: null,
      openNav: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener("resize", this.handleResize);

    this.setState({
      windowTop: window.pageYOffset === 0,
      windowWidth: window.innerWidth,
    })
  }

  handleScroll = () => {
    this.setState({
      windowTop: window.pageYOffset === 0
    })
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  handleNavToggle = () => {
    this.setState(prevState => ({openNav: !prevState.openNav}))
  }

  render() {
    return (
      <StyledRow bgColor={this.state.windowTop ? 'transparent' : theme.colors.white }>
        <StyledContainer>
          <StyledNav>
            <LogoNavContainer>
              <Logo src={ this.state.windowWidth <= theme.mediaSizes.medium || !this.state.windowTop
                            ? logoColor
                            : logoWhite }/>
              <NavUl fontColor={this.state.windowTop ? theme.colors.white : theme.colors.blue}
                className={`${this.state.openNav ? 'open': ''}`} >
                <NavLi>Plans</NavLi>
                <NavLi>Speeds</NavLi>
                <NavLi>About Brüner Dynamics</NavLi>
                <NavLi>Equipment</NavLi>
              </NavUl>
            </LogoNavContainer>
            <NavCTA fontColor={this.state.windowTop ? theme.colors.white : theme.colors.blue} >
              Call Now&nbsp;
              <BoldSpan>1.888.888.8888</BoldSpan>
            </NavCTA>
            <NavToggleTrigger src={this.state.openNav ? hamburgerMenu : hamburgerMenu} onClick={this.handleNavToggle}/>
          </StyledNav>
        </StyledContainer>
      </StyledRow>
    )
  }
}

export default Nav
