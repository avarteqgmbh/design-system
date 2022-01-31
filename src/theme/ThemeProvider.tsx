import React from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  createTheme,
  useTheme as muiUseTheme,
  Palette as MuiPalette
} from '@mui/material/styles'
import { CssBaseline, ThemeOptions as MuiThemeOptions } from '@mui/material'
import { theme as anyninesLight } from './light'
import { theme as anyninesDark } from './dark'
import { ThemeProviderProps as MuiThemeProviderProps } from '@mui/material/styles/ThemeProvider'
import { DefaultTheme } from '@mui/styles'

declare module '@mui/material/styles' {
  interface Theme extends DefaultTheme {
    radius: {
      none: number
      small: number
      medium: number
      large: number
      button: number
      card: number
    }
  }

  interface Palette extends MuiPalette {
    bg: {
      paper: string
      default: string
      light: string
      medium: string
      border: string
      gradient: string
    }
    gradient: {
      light: string
      dark: string
      primary: string
    }
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    radius?: {
      none?: number
      small?: number
      medium?: number
      large?: number
      button?: number
      card?: number
    }
  }
}
export type CustomThemeName = 'light' | 'dark'

export const useTheme = muiUseTheme()

const THEMES: { [key in CustomThemeName]: MuiThemeOptions } = {
  light: anyninesLight,
  dark: anyninesDark
}

export interface ThemeProviderProps
  extends Omit<MuiThemeProviderProps, 'theme'> {
  theme?: MuiThemeOptions | CustomThemeName
}

export const ThemeProvider = (props: ThemeProviderProps): JSX.Element => {
  const { theme = 'dark' } = props

  function getTheme(): MuiThemeOptions {
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
