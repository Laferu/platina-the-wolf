import React, { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Typography, Paper, Button } from '@material-ui/core'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import { makeStyles } from '@material-ui/core/styles'

import {
  StyledSpacing,
  StyledScroll,
  StyledMain,
  StyledPaperText,
  Wrapper
} from '../utils/styles'
import CarouselComponent from '../components/Carousel'

const useStyles = makeStyles(theme => ({
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

const Home = () => {
  const classes = useStyles()
  return (
    <Fragment>
      <Head>
        <title>Platina the Wolf</title>
      </Head>
      <div style={{
        display: 'flex',
        minHeight: '100vh'
      }}>
        <CssBaseline />
        <Sidebar />
        <Topbar />
        <StyledScroll>
          <div className={classes.toolbar} />
          <StyledMain>
            <div>
              <StyledPaperText>
                <Typography paragraph>
                  Aliada à dois humanos, Platina parte para uma jornada em busca de poder para retomar o trono que é seu por direito. Guie sua aventura pelos quatro cantos de Gaia e vivencie grandes batalhas, aventuras e emoções.
                </Typography>
                <Typography paragraph>
                  Platina the Wolf é um game de RPG em desenvolvimento, onde fantasia, ficção científica e super poderes atuam em um mesmo universo.
                </Typography>
                <Typography paragraph>
                  <Link href='/games/platina-the-wolf-and-the-heir-of-the-light'>
                    <Button
                      variant="contained"
                      color="secondary"
                      component='a'
                    >
                      Clique aqui para testar!
                    </Button>
                  </Link>
                </Typography>
              </StyledPaperText>
              <StyledSpacing />
              <CarouselComponent />
            </div>
          </StyledMain>
        </StyledScroll>
        {/* <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
          <Link href='/about'>
            <a>about</a>
          </Link>
        </main> */}
      </div>
    </Fragment>
  )
}

export default Home
