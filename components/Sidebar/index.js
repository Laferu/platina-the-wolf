import React, {
  useState,
  Fragment,
  useContext,
  useMemo,
  useCallback
} from 'react'
import { useTheme } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
// import Link from 'next/link'
// import { Collapse } from '@material-ui/core'

import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// import InboxIcon from '@material-ui/icons/MoveToInbox'
// import MailIcon from '@material-ui/icons/Mail'
// import ExpandLess from '@material-ui/icons/ExpandLess'
// import ExpandMore from '@material-ui/icons/ExpandMore'

import {
  HomeOutlined,
  SportsEsportsOutlined,
  ImportContactsOutlined,
  PublicOutlined,
  EmojiPeopleOutlined,
  SportsKabaddiOutlined,
  TrendingUpOutlined,
  FlareOutlined,
  ContactMailOutlined,
  MonetizationOnOutlined,
  Mood
} from '@material-ui/icons'

import { GlobalContext } from '../../utils/Context'
import {
  useStyles,
  StyledDrawer
} from './styles'
import ListItemLink from '../ListItemLink'
import { CustomScrollbar } from '../../utils/styles'

const Sidebar = () => {
  const context = useContext(GlobalContext)
  const classes = useStyles()
  const theme = useTheme()
  // const [open, setOpen] = useState([])

  // const CustomLink = props => <Link to={to} {...props} />

  const onMouseOver = useCallback(() => {
    context.state.setSidebarToggle(true)
  }, [])

  const onMouseOut = useCallback(() => {
    context.state.setSidebarToggle(false)
  }, [])

  return (
    <Fragment>
      <StyledDrawer
        variant="permanent"
        className={
          context.state.sidebarToggle ? classes.drawerOpen : classes.drawerClose
        }
        classes={{
          paper: context.state.sidebarToggle ? classes.drawerOpen : classes.drawerClose
        }}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <CustomScrollbar>
        <div className={classes.toolbar}>
          <IconButton onClick={() => context.state.setSidebarToggle(false)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItemLink
            href='/'
            icon={<HomeOutlined />}
            primary='Início'
          />
          <ListItemLink
            href='/games'
            icon={<SportsEsportsOutlined />}
            primary='Games'
          />
          <ListItem button>
            <ListItemIcon><ImportContactsOutlined /></ListItemIcon>
            <ListItemText primary='Histórias' />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><PublicOutlined /></ListItemIcon>
            <ListItemText primary='Gaia' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><EmojiPeopleOutlined /></ListItemIcon>
            <ListItemText primary='Personagens' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><SportsKabaddiOutlined /></ListItemIcon>
            <ListItemText primary='Classes e Raças' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><TrendingUpOutlined /></ListItemIcon>
            <ListItemText primary='Poderes' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><FlareOutlined /></ListItemIcon>
            <ListItemText primary='Cristais Cósmicos' />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><ContactMailOutlined /></ListItemIcon>
            <ListItemText primary='Contato' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><Mood /></ListItemIcon>
            <ListItemText primary='Apoie o Projeto' />
          </ListItem>
        </List>
        {/* <List>
          <ListItem button onClick={() => setOpen(!open)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon><MailIcon /></ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        </List> */}
        </CustomScrollbar>
      </StyledDrawer>
      
    </Fragment>
  )
}

export default Sidebar
