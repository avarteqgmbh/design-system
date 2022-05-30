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
  colorPrimary: anyninesLight.palette.primary.main
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
      colorSecondary: anyninesDark.palette.grey[500],
      textColor: anyninesDark.palette.text.primary,
      barTextColor: anyninesDark.palette.text.secondary,
      inputBg: anyninesDark.palette.background.input,
      appBg: anyninesDark.palette.background.default,
      appBorderColor: anyninesDark.palette.background.medium,
      appContentBg: anyninesDark.palette.background.paper,
      barBg: anyninesDark.palette.background.paper
    },
    light: {
      ...themes.light,
      ...sharedThemeContext,
      brandImage: logoLight,
      colorSecondary: anyninesLight.palette.text.secondary,
      textColor: anyninesLight.palette.text.primary,
      barTextColor: anyninesLight.palette.text.secondary,
      inputBg: anyninesLight.palette.background.input,
      appBg: anyninesLight.palette.background.default,
      appBorderColor: anyninesLight.palette.background.medium,
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
      showName: true,
      dynamicTitle: true
    }
  }
}

export const decorators = [withThemeProvider]
