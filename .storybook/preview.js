import React from 'react'
import { anyninesLight, anyninesDark, santanderLight, santanderDark, toyotaLight, toyotaDark } from '@avarteqgmbh/happy-token-system'
import { ThemeProvider } from '../src/theme/ThemeProvider'
import { Box } from "@mui/material"

import { GlobalStyle } from './globalStyle/GlobalStyle'
import logoDark from './logo_dark.svg'
import logoLight from './logo_light.svg'

import { useDarkMode } from 'storybook-dark-mode'
import { useToolbarActions } from 'storybook-addon-toolbar-actions'
import { themes } from '@storybook/theming'

import Google from '@mui/icons-material/Google'

const sharedThemeContext = {
  brandTitle: 'Storybook by anynines',
  brandUrl: 'https://www.anynines.com/',
  brandTarget: '_self',
  colorPrimary: anyninesLight.palette.primary.main,
  colorSecondary: anyninesLight.palette.primary.main,
  inputBg: anyninesLight.palette.primary.main,
  appBorderColor: anyninesLight.palette.primary.main
}

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    darkMode: {
      dark: {
        ...themes.dark,
        ...sharedThemeContext,
        brandImage: logoDark,
        appBg: anyninesDark.palette.background.medium,
        appContentBg: anyninesDark.palette.background.paper,
        barBg: anyninesDark.palette.background.paper,
        
      },
      light: {
        ...themes.light,
        ...sharedThemeContext,
        brandImage: logoLight,
        appBg: anyninesLight.palette.background.medium,
        appContentBg: anyninesLight.palette.background.paper,
        barBg: anyninesLight.palette.background.paper,
      }
    },
    muiDocSrc: 'https://mui.com/components/',
    options: {
      storySort: {
        order: ['👋 Get started', 'Layout', 'Inputs', 'Navigation', 'Surfaces', 'Feedback', 'Data Display', 'Lab'],
      },
    }
  }

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'anynines',
    toolbar: {
      icon: 'circlehollow',
      items: ['anynines', 'santander','toyota'],
      showName: true,
    },
  },
}

const getTheme = (themeName) => {
  const mode = useDarkMode() ? 'Dark' : 'Light'

  const themeNameWithMode = themeName + mode

  const tokenThemes = {
    'anyninesLight': anyninesLight,
    'anyninesDark': anyninesDark,
    'santanderLight': santanderLight,
    'santanderDark': santanderDark,
    'toyotaLight': toyotaLight,
    'toyotaDark': toyotaDark,
  }

  return tokenThemes[themeNameWithMode]
}

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme)

  useToolbarActions(
    'icon-id',
    <Google style={{ fill: 'currentColor' }} />,
    {
      onClick:() => {
        window.open(context.parameters.muiDocSrc, '_blank').focus();
      } 
    } 
  )

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box bgcolor="background.default" height="100vh" pt='20px' sx={{padding: 5}}>
        <Story {...context} />
      </Box>
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]
