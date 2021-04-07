import React, { Fragment, useContext } from 'react'
import Head from 'next/head'
// import Link from 'next/link'
import { useRouter } from 'next/router'
import CssBaseline from '@material-ui/core/CssBaseline'
// import Topbar from '../../components/Topbar'
// import Sidebar from '../../components/Sidebar'
// import { Avatar, Button, Chip, Icon, Typography } from '@material-ui/core'
// import { NearMe } from '@material-ui/icons'
// import { makeStyles } from '@material-ui/core/styles'
// import { GlobalContext } from '../../utils/Context'

import {
  // StyledSpacing,
  StyledScroll,
  // StyledMain,
  // StyledPaperText,
  StyledMainIframe,
  StyledIframe
} from '../../utils/styles'

// const useStyles = makeStyles(theme => ({
//   toolbar: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3)
//   }
// }))

const GameOne = () => {
  const router = useRouter()
  const { slug } = router.query
  // console.log(Array(slug)[0])
  // const { url } = useContext(GlobalContext)
  // const classes = useStyles()
  return (
    <Fragment>
      <Head>
        <title>Platina the Wolf</title>

      </Head>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <StyledScroll>
          <StyledMainIframe>
            <StyledIframe
              src={`${router.basePath}/${slug}/index.html`}
            />
          </StyledMainIframe>
        </StyledScroll>
      </div>
    </Fragment>
  )
}

export default GameOne

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'platina-the-wolf-and-the-heir-of-the-light' } },
    ],
    fallback: false
  }
}

export const getStaticProps = async () => {
  return {
    props: {}
  }
}
