import React from 'react'
import { Global, css } from '@emotion/core'
import { theme, media } from '../styles'

const GlobalStyles = () => (
  <Global
  styles={css`
    h1 {
      font-size: 60px;
      line-height: 62px;
      color: ${theme.colors.white};
      font-family: ${theme.fonts.MavenPro};
      margin-bottom: 30px;
      text-align: center;
      font-weight: 400;

      ${media.medium} {
        font-size: 50px;
        line-height: 52px;
        text-align: left;
      }

      ${media.small} {
        font-size: 40px;
        line-height: 42px;
      }
    }

    h2 {
      font-size: 48px;
      line-height: 50px;
      margin-bottom: 15px;
      text-align: center;
      color: ${theme.colors.dark};
      font-family: ${theme.fonts.MavenPro};

      ${media.medium} {
        font-size: 42px;
        line-height: 44px;
        text-align: left;
      }

      ${media.small} {
        font-size: 36px;
        line-height: 38px;
      }
    }

    h3 {
      font-size: 36px;
      line-height: 38px;
      margin-bottom: 15px;
      color: ${theme.colors.dark};
      font-family: ${theme.fonts.MavenPro};

      ${media.medium} {
        font-size: 32px;
        line-height: 34px;
        text-align: left;
      }

      ${media.small} {
        font-size: 28px;
        line-height: 30px;
      }

      &.white {
        color: ${theme.colors.white};
      }
    }

    h4 {
      font-size: 24px;
      line-height: 30px;
      color: ${theme.colors.dark};
      font-family: ${theme.fonts.SourceSansPro};
      font-weight: 400;

      &.heavy {
        font-weight: 700;
      }
    }

    p {
      font-size: 16px;
      line-height: 24px;
      font-family: ${theme.fonts.SourceSansPro};
      color: ${theme.colors.dark};

      ${media.small} {
        font-size: 14px;
        line-height: 22px;
      }

      &.legal {
        font-size: 10px;
        line-height: 12px;
        color: ${theme.colors.legalGray};
      }
    }

    a {
      text-decoration: none;
    }

    .text-center {
      text-align: center;
    }
  `}
  />
)


export default GlobalStyles