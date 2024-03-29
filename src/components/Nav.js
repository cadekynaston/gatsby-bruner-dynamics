import React from 'react'
import styled from '@emotion/styled'

import logoWhite from '../images/bruner-logo-white.svg'
import logoColor from '../images/bruner-logo-color.svg'
import hamburgerMenu from '../images/hamburger.svg'
import { theme, Container, Row, media } from '../styles'

const StyledRow = styled(Row)`
  height: 60px;
  position: fixed;
  background-color: ${props => props.windowTop ? 'transparent' : theme.colors.white};
  z-index: 100;
  box-shadow: ${props => props.windowTop ? 'none' : '0 4px 10px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23)'};

  ${media.medium} {
    background-color: white;
  }
`

const StyledContainer = styled(Container)`
  padding-top: 0;
  padding-bottom: 0;

  ${media.medium} {
    padding-top: 0;
    padding-bottom: 0;
  }

  ${media.small} {
    padding-top: 0;
    padding-bottom: 0;
  }
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
  white-space: nowrap;

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
  a {
    color: ${props => props.fontColor};
  }
`

const HideForSmallMedium = styled.div`
  display: flex;

  ${media.medium} {
    display: none;
  }
`

const HideForMediumUp = styled.div`
  display: none;

  ${media.medium} {
    display: flex;
  }
`

class Nav extends React.Component {

  constructor() {
    super()

    this.state = {
      windowTop: true,
      openNav: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      windowTop: window.pageYOffset === 0,
    })
  }

  handleScroll = () => {
    this.setState({
      windowTop: window.pageYOffset === 0
    })
  }


  handleNavToggle = () => {
    this.setState(prevState => ({openNav: !prevState.openNav}))
  }

  render() {
    return (
      <StyledRow windowTop={this.state.windowTop}>
        <StyledContainer>
          <StyledNav>
            <LogoNavContainer>
              <HideForSmallMedium>
                <Logo src={ this.state.windowTop ? logoWhite : logoColor }/>
              </HideForSmallMedium>
              <HideForMediumUp>
                <Logo src={logoColor}/>
              </HideForMediumUp>
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
              <BoldSpan fontColor={this.state.windowTop ? theme.colors.white : theme.colors.blue}><a href='tel:1-888-888-8888'>1.888.888.8888</a></BoldSpan>
            </NavCTA>
            <NavToggleTrigger src={this.state.openNav ? hamburgerMenu : hamburgerMenu} onClick={this.handleNavToggle}/>
          </StyledNav>
        </StyledContainer>
      </StyledRow>
    )
  }
}

export default Nav
