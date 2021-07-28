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

export const makeStyles = muiMakeStyles

export interface ThemeProviderProps
  extends Omit<MuiThemeProviderProps, 'theme'> {
  theme?:
    | Theme
    | 'anynines'
    | 'anynines-dark'
    | 'thomsit'
    | 'toyota'
    | 'bosch'
    | 'santander'
}

export const ThemeProvider = (props: ThemeProviderProps): JSX.Element => {
  const { theme = 'anynines' } = props

  function getTheme(): ThemeOptions {
    if (theme === 'anynines') {
      return anynines
    }
    if (theme === 'anynines-dark') {
      return anyninesDark
    }
    if (theme === 'toyota') {
      return toyota
    }
    if (theme === 'thomsit') {
      return thomsit
    }
    if (theme === 'bosch') {
      return bosch
    }
    if (theme === 'santander') {
      return anyninesDark
    }
    return theme
  }

  return <MuiThemeProvider {...props} theme={createTheme(getTheme())} />
}
