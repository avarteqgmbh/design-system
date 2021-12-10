import React from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  DeprecatedThemeOptions,
  createTheme
} from '@mui/material/styles'
import { CssBaseline, ThemeOptions } from '@mui/material'
import muiMakeStyles from '@mui/styles/makeStyles'

import { Theme } from './types'
import { theme as anynines } from './theme'
import { theme as anyninesDark } from './themes/anyninesDark'
import { theme as toyota } from './themes/toyota'
import { theme as thomsit } from './themes/thomsit'
import { theme as bosch } from './themes/bosch'
import { theme as boschDark } from './themes/boschDark'
import { theme as santander } from './themes/santander/index'
import { theme as siemens } from './themes/siemens'
import { theme as siemensDark } from './themes/siemensDark'
import { theme as hyundai } from './themes/hyundai'
import { theme as kia } from './themes/kia'
import { theme as bum } from './themes/bum'
import { theme as tesla } from './themes/tesla'
import { ThemeProviderProps as MuiThemeProviderProps } from '@mui/material/styles/ThemeProvider'

declare module '@mui/styles/defaultTheme' {
  type DefaultTheme = Theme
}

export type CustomThemeName =
  | 'anynines'
  | 'anynines-dark'
  | 'thomsit'
  | 'toyota'
  | 'bum'
  | 'bosch'
  | 'bosch-dark'
  | 'hyundai'
  | 'kia'
  | 'tesla'
  | 'santander'
  | 'siemens'
  | 'siemens-dark'

export const makeStyles = muiMakeStyles

const THEMES: { [key in CustomThemeName]: DeprecatedThemeOptions } = {
  anynines,
  'anynines-dark': anyninesDark,
  toyota,
  thomsit,
  bosch,
  bum,
  'bosch-dark': boschDark,
  santander,
  hyundai,
  kia,
  tesla,
  siemens,
  'siemens-dark': siemensDark
}

export interface ThemeProviderProps
  extends Omit<MuiThemeProviderProps, 'theme'> {
  theme?: ThemeOptions | CustomThemeName
}

export const ThemeProvider = (props: ThemeProviderProps): JSX.Element => {
  const { theme = 'anynines' } = props

  function getTheme(): ThemeOptions {
    if (typeof theme === 'string') {
      return THEMES[theme]
    }
    return theme
  }

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider {...props} theme={createTheme(getTheme())} />
    </StyledEngineProvider>
  )
}

export { CssBaseline }
