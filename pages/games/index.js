import React, { Fragment, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import CssBaseline from '@material-ui/core/CssBaseline'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import { Avatar, Button, Chip, Icon, Typography } from '@material-ui/core'
import { NearMe } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { GlobalContext } from '../../utils/Context'
import useScript from '../../utils/useScript';

// const Demo = props => {
//   importScript("/path/to/resource.js");
// }

// import "../../components/platinaGameOneComponents/js"
// import "../../components/platinaGameOneComponents/js/libs/pixi.js"
// import "../../components/platinaGameOneComponents/js/libs/pixi-tilemap.js" 
// import "../../components/platinaGameOneComponents/js/libs/pixi-picture.js"
// import "../../components/platinaGameOneComponents/js/libs/fpsmeter.js"

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

const Games = () => {
  const context = useContext(GlobalContext)
  const classes = useStyles()

  const LinkBehavior = React.forwardRef((props, ref) => (
    <Link ref={ref} href={props.href} {...props}>
      {props.children}
    </Link>
  ))

  return (
    <Fragment>
      <Head>
        <title>Platina the Wolf</title>

      </Head>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Sidebar />
        <Topbar />
        <StyledScroll>
          <div className={classes.toolbar} />
          <StyledMain>
            {/* <StyledIframe src='/platinaGameOneComponents/index.html' /> */}
            <StyledPaperText>
                <h2>Platina the Wolf - The Heir of the Light</h2>
                {/* <h3>The Heir of the Light</h3> */}
                
              <Typography paragraph>
                Aliada à dois humanos, Platina parte para uma jornada em busca de poder para retomar o trono que é seu por direito.<br />
                Guie sua aventura pelos quatro cantos de Gaia e vivencie grandes batalhas, aventuras e emoções.
                {/* <br /> */}
                
              </Typography>
              <Chip
                icon={<NearMe />}
                label="Versão: 0.8.0"
                color="secondary"
              />
              <StyledSpacing />
              <div className='button-group'>
                <Button
                  variant="contained"
                  color="secondary"
                  href='https://mega.nz/file/zl1yTSYT#9mDv9yNkHL_0S2CMF4LJiLpTgW00NjePwt6T7oeiUP8'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Windows
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  href='https://mega.nz/file/ewNRRSiD#Ce6hIyMPmk0N-h_INsqFQnulVrBhCQU-6u1n77keRtg'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Linux
                </Button>
                <Link href='/games/platina-the-wolf-and-the-heir-of-the-light'>
                  <Button
                    variant="contained"
                    color="secondary"
                    component='a'
                  >
                    Web
                  </Button>
                </Link>
              </div>
            </StyledPaperText>
          </StyledMain>
        </StyledScroll>
      </div>
    </Fragment>
  )
}

export default Games
