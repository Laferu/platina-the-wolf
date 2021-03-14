import React, { useState, useEffect, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { createMuiTheme, ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  const [drawerWidth, setDrawerWidth] = useState(240)
  const themeTemp = createMuiTheme({
    palette: {
      primary: {
        main: '#222'
      },
      secondary: {
        main: 'rgba(114,110,193,1)'
      }
    }
  })
  const theme = {...themeTemp, drawerWidth}
  // console.log(theme)

  return (
    <GlobalContext.Provider value={{
      state: {
        sidebarToggle,
        setSidebarToggle
      },
      url: {
        platina1Url: 'https://laferu.github.io/Platina-the-Wolf-and-the-Heir-of-Light'
      }
    }}>
      <MaterialThemeProvider theme={theme}>
        <ThemeProvider theme={theme} drawerWidth={drawerWidth}>
          { children }
        </ThemeProvider>
      </MaterialThemeProvider>
    </GlobalContext.Provider>
  )
}
