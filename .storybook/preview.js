import { anyninesLight, anyninesDark, santanderLight, santanderDark, toyotaLight, toyotaDark } from '@avarteqgmbh/happy-token-system'
import { useDarkMode } from 'storybook-dark-mode'
import { ThemeProvider } from '../src/theme/ThemeProvider'
import React from 'react'
import { useToolbarActions } from 'storybook-addon-toolbar-actions'
import Google from '@mui/icons-material/Google'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
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

const withThemeProvider=(Story,context)=>{
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
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]
