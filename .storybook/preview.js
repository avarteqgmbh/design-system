import { anyninesLight, anyninesDark, santanderLight, santanderDark, toyotaLight, toyotaDark } from '@avarteqgmbh/happy-token-system'
import { useDarkMode } from 'storybook-dark-mode'
import { ThemeProvider } from '../src/theme/ThemeProvider'
import React from 'react'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
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
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['anynines', 'santander','toyota'],
      showName: true,
    },
  },
};

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

  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider];
