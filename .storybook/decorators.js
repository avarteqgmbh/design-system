import React from 'react'
import { ThemeProvider } from '../src/theme/ThemeProvider'
import { Box, CssBaseline } from '@mui/material'
import { useDarkMode } from 'storybook-dark-mode'
import { useToolbarActions } from 'storybook-addon-toolbar-actions'

import * as happyTokenThemes from '@avarteqgmbh/happy-token-system'

import Google from '@mui/icons-material/Google'
import { GlobalStyle } from './GlobalStyle'

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
      onClick: () => {
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
      <GlobalStyle theme={theme} />
      <CssBaseline />
      <Box
        sx={{
          p: context.parameters.fullscreen ? 0 : 5,
          bgcolor: `background.${context.parameters.backgroundColor}`,
          minHeight: '100vh'
        }}
      >
        <Story {...context} />
      </Box>
    </ThemeProvider>
  )
}
