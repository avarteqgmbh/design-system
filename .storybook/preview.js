import { theme } from '../src/theme/theme'
import { theme as anyninesDark } from '../src/theme/themes/anyninesDark'
import { theme as toyota } from '../src/theme/themes/toyota'
import { theme as santander } from '../src/theme/themes/santander/index'
import { theme as thomsit } from '../src/theme/themes/thomsit'
import { theme as bosch } from '../src/theme/themes/bosch'
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { addDecorator } from '@storybook/react'
import { withThemes } from '@react-theming/storybook-addon'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

const providerFn = ({ theme, children }) => {
  const muTheme = createMuiTheme(theme)
  return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>
}

addDecorator(
  withThemes(null, [theme, anyninesDark, toyota, thomsit, bosch, santander], {
    providerFn
  })
)
