import { theme as anyninesDark } from '../src/theme/dark'
import { theme as anyninesLight } from '../src/theme/light'
import { ThemeProvider, createTheme, StyledEngineProvider} from '@mui/material/styles'
import { withThemes } from '@react-theming/storybook-addon'

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

export const onThemeSwitch = context => {
  const { theme } = context

  const parameters = {
    backgrounds: {
      default: theme.palette.background.paper,
    },
  }
  return {
    parameters,
  }
}

const providerFn = ({ theme, children }) => {
  const muTheme = createTheme(theme)
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muTheme}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

addDecorator(
  withThemes(null, [anyninesDark, anyninesLight], {
    providerFn, onThemeSwitch
  })
)