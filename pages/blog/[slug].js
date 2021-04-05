import React, {
    Fragment,
    useContext,
    useState,
    useCallback
} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import CssBaseline from '@material-ui/core/CssBaseline'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Chip,
  Icon,
  Typography
} from '@material-ui/core'
import { NearMe } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { GlobalContext } from '../../utils/Context'

import {
  StyledSpacing,
  StyledScroll,
  StyledMain,
  StyledPaperText,
} from '../../utils/styles'
import AccourdionComponent from '../../components/AccordionComponent'

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

const Blog = ({ posts }) => {
  const context = useContext(GlobalContext)
  const classes = useStyles()

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
            <StyledPaperText>
              {posts.map((e, index) => (
                <Fragment key={index}>
                  <h2>{e.title}</h2>
                  <Typography paragraph>
                    aaa
                  </Typography>
                </Fragment>

              ))}
              
            </StyledPaperText>
          </StyledMain>
        </StyledScroll>
      </div>
    </Fragment>
  )
}

export default Blog

// export const getStaticPaths = async (context) => {
//   const response = await fetch(`/data/blog.json`)
//   const posts = response.json()

//   return {
//     paths: [],
//     fallback: false
//   }
// }

export const getStaticProps = async () => {
  const slug = context.params
  const response = await fetch(`/data/blog.json`)
  const posts = response.json()
  return {
    props: {
      posts
    }
  }
}
