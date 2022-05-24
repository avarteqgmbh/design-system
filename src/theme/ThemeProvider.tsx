import React from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  createTheme
} from '@mui/material/styles'
import { CssBaseline, ThemeOptions } from '@mui/material'
import muiMakeStyles from '@mui/styles/makeStyles'

import { anyninesLight } from '@avarteqgmbh/happy-token-system'
import { Theme } from './types'
import { ThemeProviderProps as MuiThemeProviderProps } from '@mui/material/styles/ThemeProvider'
import createCache from '@emotion/cache'
import { CacheProvider, EmotionCache } from '@emotion/react'

export type { ThemeOptions } from '@mui/material'

declare module '@mui/styles/defaultTheme' {
  type DefaultTheme = Theme
}

export const makeStyles = muiMakeStyles
export interface ThemeProviderProps
  extends Omit<MuiThemeProviderProps, 'theme'> {
  theme?: ThemeOptions
}

export function createEmotionCache(): EmotionCache {
  return createCache({ key: 'mui', prepend: true })
}

export const ThemeProvider = (props: ThemeProviderProps): JSX.Element => {
  const { theme = anyninesLight } = props

  function getTheme(): ThemeOptions | undefined {
    return theme as Theme
  }

  return (
    <CacheProvider value={createEmotionCache()}>
      <MuiThemeProvider {...props} theme={createTheme(getTheme())} />
    </CacheProvider>
  )
}

export { CssBaseline }
