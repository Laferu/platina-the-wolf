import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { Toolbar } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: theme.drawerWidth,
    width: `calc(100% - ${theme.drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up('lg')]: {
      marginLeft: 0
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }
}))

export const StyledToolbar = styled(Toolbar)`
  && {
    .MuiSvgIcon-root {
      color: #726ec1;
      background: -webkit-linear-gradient(rgba(114,110,193,1), rgba(220,219,241,1));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

export const StyledToolbarContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  /* background: #222; */

  img {
    height: 40px;

    @media screen and (max-width: ${props => props.theme.breakpoints.values.sm}px) {
      height: 20px;
    }
  }

  h4 {
    color: #726ec1;
    background: -webkit-linear-gradient(rgba(114,110,193,1), rgba(220,219,241,1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'DejaVu Sans Bold';

    @media screen and (max-width: ${props => props.theme.breakpoints.values.sm}px) {
      font-size: 16px;
    }
  }
`
