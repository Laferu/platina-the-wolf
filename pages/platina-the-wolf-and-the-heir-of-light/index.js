import React, { Fragment, useContext } from 'react'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import { makeStyles } from '@material-ui/core/styles'
import { GlobalContext } from '../../utils/Context'

import {
  StyledSpacing,
  StyledScroll,
  StyledMain,
  StyledPaperText,
  StyledIframe
} from '../../utils/styles'

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

const Home = () => {
  const context = useContext(GlobalContext)
  const classes = useStyles()
  return (
    <Fragment>
      <Head>
        <title>Platina the Wolfe</title>

      </Head>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Sidebar />
        <Topbar />
        <StyledScroll>
          <div className={classes.toolbar} />
          <StyledMain>
            <StyledIframe src={context.url.platina1Url} />
          </StyledMain>
        </StyledScroll>
      </div>
    </Fragment>
  )
}

export default Home
