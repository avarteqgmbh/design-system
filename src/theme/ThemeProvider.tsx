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
import { theme as toyota } from './themes/toyota'
import { theme as thomsit } from './themes/thomsit'

export const makeStyles = muiMakeStyles

export interface ThemeProviderProps
  extends Omit<MuiThemeProviderProps, 'theme'> {
  theme?: Theme | 'anynines' | 'toyota' | 'thomsit'
}

export function ThemeProvider(props: ThemeProviderProps): JSX.Element {
  const { theme = 'anynines' } = props

  function getTheme(): ThemeOptions {
    if (theme === 'anynines') {
      return anynines
    }
    if (theme === 'toyota') {
      return toyota
    }
    if (theme === 'thomsit') {
      return thomsit
    }
    return theme
  }

  return <MuiThemeProvider {...props} theme={createTheme(getTheme())} />
}
