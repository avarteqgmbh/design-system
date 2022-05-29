import { anyninesLight, anyninesDark } from '@avarteqgmbh/happy-token-system'
import { withThemeProvider } from './decorators'

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { themes } from '@storybook/theming'
import logoDark from './logos/dark.svg'
import logoLight from './logos/light.svg'

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
      disable: true
    }
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
      appBg: anyninesDark.palette.background.light,
      appContentBg: anyninesDark.palette.background.default,
      barBg: anyninesDark.palette.background.default
    },
    light: {
      ...themes.light,
      ...sharedThemeContext,
      brandImage: logoLight,
      appBg: anyninesLight.palette.background.default,
      appContentBg: anyninesLight.palette.background.paper,
      barBg: anyninesLight.palette.background.paper
    }
  },
  muiDocSrc: 'https://mui.com/components/',
  options: {
    storySort: {
      order: [
        '👋 Get started',
        'Layout',
        'Inputs',
        'Navigation',
        'Surfaces',
        'Feedback',
        'Data Display',
        'Lab'
      ]
    }
  },
  viewport: { viewports: INITIAL_VIEWPORTS }
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'anynines',
    toolbar: {
      icon: 'circlehollow',
      items: [
        'anynines',
        'bosch',
        'bum',
        'heartPoints',
        'hyundai',
        'kia',
        'mazda',
        'neutral',
        'santander',
        'siemens',
        'thomsit',
        'toyota'
      ],
      showName: true
    }
  }
}

export const decorators = [withThemeProvider]
