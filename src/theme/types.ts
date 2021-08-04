import {
  Color,
  Theme as MuiTheme,
  ThemeOptions as MuiThemeOptions
} from '@material-ui/core'
import {
  Palette as MuiPalette,
  PaletteColor,
  TypeBackground
} from '@material-ui/core/styles/createPalette'

export interface Background extends TypeBackground {
  light?: string
  medium?: string
  border?: string
  gradient?: string
}
export interface Grey extends Color {
  1000?: string
}

export interface Gradients {
  daylight?: string
  midnight?: string
  primary?: string
}
export interface Primary extends PaletteColor {
  lighter?: string
  darker?: string
}

export interface Palette extends MuiPalette {
  background: Background
  grey: Grey
  gradients: Gradients
  primary: Primary
}

export interface Radius {
  none?: number
  small?: number
  medium?: number
  large?: number
  button?: number
  card?: number
}

export interface Theme extends MuiTheme {
  palette: Palette
  radius: Radius
}
export interface ThemeOptions extends MuiThemeOptions {
  palette: Palette
  radius: Radius
}
