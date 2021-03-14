import styled, { createGlobalStyle } from 'styled-components'
import { Box, Paper } from '@material-ui/core'

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

  .button-group {
    display: flex;
    column-gap: 20px;

    a {
      &:link, &:visited {
        color: inherit;
        text-decoration: inherit;
      }
    }
  }
`

export const StyledScroll = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  width: calc(100% - ${props => props.theme.drawerWidth}px);
  background: rgb(66,43,122);
  background: linear-gradient(270deg, rgba(114,110,193,1) 0%, rgba(220,219,241,1) 100%);
`

export const StyledMain = styled(Box).attrs({
  component: 'main'
})`
  &&{
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
    padding: 0;
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
