import { theme } from '../src/theme/theme'
import { theme as anyninesDark } from '../src/theme/themes/anyninesDark'
import { theme as toyota } from '../src/theme/themes/toyota'
import { theme as santander } from '../src/theme/themes/santander/index'
import { theme as thomsit } from '../src/theme/themes/thomsit'
import { theme as bosch } from '../src/theme/themes/bosch'
import { ThemeProvider, createTheme, adaptV4Theme, StyledEngineProvider} from '@mui/material/styles'
import { addDecorator } from '@storybook/react'
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

const providerFn = ({ theme, children }) => {
  const muTheme = createTheme(adaptV4Theme(theme))
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={(muTheme)}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

addDecorator(
  withThemes(null, [theme, anyninesDark, toyota, thomsit, bosch, santander], {
    providerFn
  })
)
