import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { Drawer } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  drawer: {
    width: theme.drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    background: theme.palette.primary.dark
  },
  drawerOpen: {
    width: theme.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: theme.palette.primary.dark,
    [theme.breakpoints.down('xs')]: {
      position: 'fixed',
      zIndex: 9999,
      width: '100%'
    }
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    background: theme.palette.primary.dark,
    [theme.breakpoints.up('lg')]: {
      width: theme.drawerWidth
    },
    [theme.breakpoints.down('xs')]: {
      width: 0
    }
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

export const StyledDrawer = styled(Drawer)`
  && {
    .MuiSvgIcon-root {
      color: #726ec1;
      background: -webkit-linear-gradient(rgba(114,110,193,1), rgba(220,219,241,1));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    span {
      color: #726ec1;
      background: -webkit-linear-gradient(rgba(114,110,193,1), rgba(220,219,241,1));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`
