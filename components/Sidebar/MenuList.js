import React, {
  Fragment,
  useState,
  useEffect,
  useContext
} from 'react'
import {
  StyledList,
  StyledListItem,
  StyledListItemSubMenu,
  StyledListItemIcon,
  StyledListItemText,
  StyledListItemSubMenuText,
  StyledCollapse,
  StyledListCollapse,
  StyledLinkSubMenu,
  StyledListItemMenu
} from './styles'
import {
  ExpandLess,
  ExpandMore,
  HomeOutlined,
  ShoppingCartOutlined,
  AssignmentOutlined,
  GavelOutlined,
  SwapHorizOutlined,
  SettingsOutlined,
  GroupOutlined,
  PersonOutlined,
  ExitToApp
} from '@material-ui/icons'
import { AuthContext } from '../../Context'
import { Redirect } from 'react-router-dom'

const MenuList = () => {
  const [colapseState, setColapseState] = useState(false)
  const [page] = useState(`/${window.location.pathname.split('/')[1]}`)
  const [page2] = useState(`/${window.location.pathname.split('/')[2]}`)
  const context = useContext(AuthContext)

  const MenuListJson = [
    {
      name: context.intl.message.homeMenu,
      url: '/',
      icon: <HomeOutlined />
    },
    {
      name: 'Pedidos',
      url: '/pedidos',
      icon: <AssignmentOutlined />
    },
    {
      name: 'Produtos',
      url: '/produtos',
      icon: <ShoppingCartOutlined />,
      children: [
        {
          name: 'Listagem',
          url: '/listagem',
          icon: <HomeOutlined />
        },
        {
          name: 'Estoque',
          url: '/estoque',
          icon: <HomeOutlined />
        }
      ]
    },
    {
      name: 'Lances',
      url: '/lances',
      icon: <GavelOutlined />,
      children: [
        {
          name: 'Aprovação Automática',
          url: '/aprovacao-automatica',
          icon: <HomeOutlined />
        },
        {
          name: 'Inválidos',
          url: '/invalidos',
          icon: <HomeOutlined />
        },
        {
          name: 'Listagem',
          url: '/listagem',
          icon: <HomeOutlined />
        }
      ]
    },
    {
      name: 'Clientes',
      url: '/clientes',
      icon: <PersonOutlined />
    },
    {
      name: 'Conversão',
      url: '/conversao',
      icon: <SwapHorizOutlined />,
      children: [
        {
          name: 'Impulsionamento',
          url: '/impulsionamento',
          icon: <HomeOutlined />
        },
        {
          name: 'Importa Clientes',
          url: '/importar-clientes',
          icon: <HomeOutlined />
        },
        {
          name: 'Interações',
          url: '/interacoes',
          icon: <HomeOutlined />
        },
        {
          name: 'Cockpit',
          url: '/cockpit',
          icon: <HomeOutlined />
        }
      ]
    },
    {
      name: 'Captura',
      url: '/captura',
      icon: <GroupOutlined />,
      children: [
        {
          name: 'Interações',
          url: '/interacoes',
          icon: <HomeOutlined />
        },
        {
          name: 'Upload',
          url: '/upload',
          icon: <HomeOutlined />
        }
      ]
    },
    {
      name: 'Configurações',
      url: '/configuracoes',
      icon: <SettingsOutlined />
    },
    {
      name: 'Logs',
      url: '/logs',
      icon: <AssignmentOutlined />
    },
    {
      name: 'Sair',
      url: '/sair',
      icon: <ExitToApp className='icon-invert' />
    }
  ]

  useEffect(() => {
    const fun = () => {
      MenuListJson.map((menuItem, index) => {
        page === menuItem.url && setColapseState({ [index]: true })
      })
    }
    fun()
  }, [page, page2])

  const logout = () => {
    localStorage.clear()
    context.auth.userData.auth = null
    return <Redirect to='/login' />
  }

  return (
    <StyledList>
      {
        MenuListJson.map((menuItem, index) => (
          menuItem.url === '/sair'
            ? (
              <Fragment key={index}>
                <StyledLinkSubMenu onClick={logout.bind(null)}>
                  <StyledListItemMenu className={page === menuItem.url ? 'active' : 'none'}>
                    <StyledListItemIcon>{menuItem.icon}</StyledListItemIcon>
                    <StyledListItemText>{menuItem.name}</StyledListItemText>
                  </StyledListItemMenu>
                </StyledLinkSubMenu>
              </Fragment>
            )
            : (
              !menuItem.children
                ? (
                  <Fragment key={index}>
                    <StyledLinkSubMenu to={menuItem.url}>
                      <StyledListItemMenu className={page === menuItem.url ? 'active' : 'none'}>
                        <StyledListItemIcon>{menuItem.icon}</StyledListItemIcon>
                        <StyledListItemText>{menuItem.name}</StyledListItemText>
                      </StyledListItemMenu>
                    </StyledLinkSubMenu>
                  </Fragment>
                )
                : (
                  <Fragment key={index}>
                    <StyledListItem
                      onClick={() => setColapseState({ [index]: !colapseState[index] })}
                      className={colapseState[index] || page === menuItem.url ? 'active' : 'none'}
                    >
                      <StyledListItemIcon>{menuItem.icon}</StyledListItemIcon>
                      <StyledListItemText>{menuItem.name}</StyledListItemText>
                      {colapseState[index]
                        ? <ExpandLess />
                        : <ExpandMore />}
                    </StyledListItem>
                    <StyledCollapse
                      in={colapseState[index]}
                      timeout='auto'
                      unmountOnExit
                    >
                      <StyledListCollapse>
                        {menuItem.children.map((subItem, index) => (
                          <StyledLinkSubMenu to={menuItem.url + subItem.url} key={index}>
                            <StyledListItemSubMenu className={page2 === subItem.url ? 'active' : 'none'}>
                              {/* <StyledListItemIconSubMenu>{subItem.icon}</StyledListItemIconSubMenu> */}
                              <StyledListItemSubMenuText>{subItem.name}</StyledListItemSubMenuText>
                            </StyledListItemSubMenu>
                          </StyledLinkSubMenu>
                        ))}
                      </StyledListCollapse>
                    </StyledCollapse>
                  </Fragment>
                )
            )
        ))
      }
    </StyledList>
  )
}

export default MenuList