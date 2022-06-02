import {
  Theme as MuiTheme,
  DeprecatedThemeOptions as MuiThemeOptions
} from '@mui/material'
import { Radius } from './theme/types'

declare module '@mui/material/styles' {
  interface Theme extends MuiTheme {
    radius: Radius
  }
  interface ThemeOptions extends MuiThemeOptions {
    radius?: Radius
  }

  interface TypographyVariants {
    button2: CSSProperties
    label1: CSSProperties
    label2: CSSProperties
    label3: CSSProperties
    label4: CSSProperties
  }

  interface TypographyVariantsOptions {
    button2?: CSSProperties
    label1?: CSSProperties
    label2?: CSSProperties
    label3?: CSSProperties
    label4?: CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    button2: true
    label1: true
    label2: true
    label3: true
    label4: true
  }
}

declare module '@mui/styles/defaultTheme' {
  type DefaultTheme = Theme
}
