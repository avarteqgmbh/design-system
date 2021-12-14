import React from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  createTheme
} from '@mui/material/styles'
import { CssBaseline, ThemeOptions } from '@mui/material'
import muiMakeStyles from '@mui/styles/makeStyles'

import { Theme } from './types'
import { theme as anyninesLight } from './light'
import { theme as anyninesDark } from './dark'
import { ThemeProviderProps as MuiThemeProviderProps } from '@mui/material/styles/ThemeProvider'

declare module '@mui/styles/defaultTheme' {
  type DefaultTheme = Theme
}

export type CustomThemeName = 'light' | 'dark'

export const makeStyles = muiMakeStyles

const THEMES: { [key in CustomThemeName]: ThemeOptions } = {
  light: anyninesLight,
  dark: anyninesDark
}

export interface ThemeProviderProps
  extends Omit<MuiThemeProviderProps, 'theme'> {
  theme?: ThemeOptions | CustomThemeName
}

export const ThemeProvider = (props: ThemeProviderProps): JSX.Element => {
  const { theme = 'dark' } = props

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

export { CssBaseline, anyninesDark, anyninesLight }
