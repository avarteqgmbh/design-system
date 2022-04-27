import React from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  createTheme
} from '@mui/material/styles'
import { CssBaseline, ThemeOptions } from '@mui/material'
import muiMakeStyles from '@mui/styles/makeStyles'

import { anyninesLight } from '@avarteqgmbh/happy-token-system'
import { Theme } from './types'
import { ThemeProviderProps as MuiThemeProviderProps } from '@mui/material/styles/ThemeProvider'

declare module '@mui/styles/defaultTheme' {
  type DefaultTheme = Theme
}

export const makeStyles = muiMakeStyles
export interface ThemeProviderProps
  extends Omit<MuiThemeProviderProps, 'theme'> {
  theme?: ThemeOptions
}

export const ThemeProvider = (props: ThemeProviderProps): JSX.Element => {
  const { theme = anyninesLight } = props

  function getTheme(): ThemeOptions | undefined {
    return theme as Theme
  }

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider {...props} theme={createTheme(getTheme())} />
    </StyledEngineProvider>
  )
}

export { CssBaseline }
