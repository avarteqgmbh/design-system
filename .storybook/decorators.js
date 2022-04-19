import React from 'react'
import { ThemeProvider } from '../src/theme/ThemeProvider'
import { GlobalStyle } from './globalStyle/GlobalStyle'
import { Box } from "@mui/material"

import { useDarkMode } from 'storybook-dark-mode'
import { useToolbarActions } from 'storybook-addon-toolbar-actions'

import * as happyTokenThemes from '@avarteqgmbh/happy-token-system'

import Google from '@mui/icons-material/Google'

const getTheme = (themeName) => {
  const mode = useDarkMode() ? 'Dark' : 'Light'

  const themeNameWithMode = themeName + mode

  return happyTokenThemes[themeNameWithMode]
}

const withIcon = (context) => {
  return useToolbarActions(
    'icon-id',
    <Google style={{ fill: 'currentColor' }} />,
    {
      onClick:() => {
        window.open(context.parameters.muiDocSrc, '_blank').focus()
      }
    }
  )
}

export const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme)

  return (
    <ThemeProvider theme={theme}>
      {withIcon(context)}
      <GlobalStyle />
      <Box bgcolor="background.default" height="100vh" pt='20px' sx={{padding: 5}}>
        <Story {...context} />
      </Box>
    </ThemeProvider>
  )
}
