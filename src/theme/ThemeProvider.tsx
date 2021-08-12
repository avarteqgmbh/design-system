import React from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  ThemeProviderProps as MuiThemeProviderProps,
  ThemeOptions,
  makeStyles as muiMakeStyles,
  createTheme
} from '@material-ui/core'

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

export type CustomThemeName =
  | 'anynines'
  | 'anynines-dark'
  | 'thomsit'
  | 'toyota'
  | 'bosch'
  | 'bosch-dark'
  | 'santander'
  | 'siemens'
  | 'siemens-dark'

export const makeStyles = muiMakeStyles

const THEMES: { [key in CustomThemeName]: ThemeOptions } = {
  anynines,
  'anynines-dark': anyninesDark,
  toyota,
  thomsit,
  bosch,
  'bosch-dark': boschDark,
  santander,
  siemens,
  'siemens-dark': siemensDark
}
export interface ThemeProviderProps
  extends Omit<MuiThemeProviderProps, 'theme'> {
  theme?: Theme | CustomThemeName
}

export const ThemeProvider = (props: ThemeProviderProps): JSX.Element => {
  const { theme = 'anynines' } = props

  function getTheme(): ThemeOptions {
    if (typeof theme === 'string') {
      return THEMES[theme]
    }
    return theme
  }

  return <MuiThemeProvider {...props} theme={createTheme(getTheme())} />
}
