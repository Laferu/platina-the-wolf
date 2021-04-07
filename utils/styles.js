import styled, { createGlobalStyle } from 'styled-components'
import { Box, Paper } from '@material-ui/core'
import PerfectScrollbar from '../components/PerfectScrollbar'

export default createGlobalStyle`
  /* #GameCanvas {
    display: none;
  }

  #UpperCanvas {
    display: none;
  }

  #GameVideo {
    display: none;
  } */

  html {
    min-height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }

  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }

  main {
    display: flex;
    flex: 1 0 auto;
    height: 100%;
    flex-direction: column;
  }

  h2 {
    margin-top: 0;
  }

  ul {
    margin: 0;
  }

  a {
    &:link, &:visited {
      color: inherit;
      text-decoration: inherit;
    }
  }

  .button-group {
    display: flex;
    column-gap: 20px;
    row-gap: 20px;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    a {
      display: block;
      height: 100%;

      &:link, &:visited {
        color: #fff;
        text-decoration: inherit;
      }
    }
  }
`

export const CustomScrollbar = styled(PerfectScrollbar).attrs({
  component: 'div'
})``

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
`

export const StyledScroll = styled(Box).attrs({
  component: 'div'
})`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  width: calc(100% - ${props => props.theme.drawerWidth}px);
  height: 100vh;
  background: rgb(66,43,122);
  background: linear-gradient(270deg, rgba(114,110,193,1) 0%, rgba(220,219,241,1) 100%);
`

export const StyledMain = styled(PerfectScrollbar).attrs({
  component: 'main'
})`
  && {
    display: flex;
    flex: 1;
    padding: ${props => props.theme.spacing(3)}px;
    flex-direction: column;
  }
`

export const StyledPaperText = styled(Paper).attrs({
  elevation: 3
})`
  padding: ${props => props.theme.spacing(3)}px;
  background: rgba(220,219,241,1);
`

export const StyledSpacing = styled.div`
  height: ${props => props.theme.spacing(3)}px;
`

export const StyledMainIframe  = styled(StyledMain)`
  && {
    padding: 0 !important;
  }
`

export const StyledIframe = styled.iframe`
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
  border: none;
  background-color: transparent;
  overflow: hidden;
  @media screen and (max-width: ${props => props.theme.breakpoints.values.sm}px) {
    width: 100vw;
    height: 100vh;
    /* margin-left: -${props => props.theme.spacing(3)}px; */
  }
`
