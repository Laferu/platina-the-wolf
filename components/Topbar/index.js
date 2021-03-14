import React, { useState, useContext, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { GlobalContext } from '../../utils/Context'
import {
  useStyles,
  StyledToolbar,
  StyledToolbarContainer
} from './styles'

const Topbar = () => {
  const router = useRouter()
  const context = useContext(GlobalContext)
  const classes = useStyles()

  // useEffect(() => {
  //   const fun = () => {
  //     console.log(context)
  //   }
  // }, [])

  return (
    <Fragment>
      <AppBar
        position='fixed'
        className={
          context.state.sidebarToggle ? classes.appBarShift : classes.appBar
        }
      >
        <StyledToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => context.state.setSidebarToggle(true)}
            edge="start"
            className={
              context.state.sidebarToggle
                ? classes.hide
                : classes.menuButton
            }
          >
            <MenuIcon />
          </IconButton>
          <StyledToolbarContainer>
            <img src={`${router.basePath}/images/wolf.png`} />
            <Typography variant="h4" noWrap>
              Platina the Wolf
            </Typography>
          </StyledToolbarContainer>
        </StyledToolbar>
      </AppBar>
    </Fragment>
  )
}

export default Topbar
