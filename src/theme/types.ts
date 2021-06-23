import {
  Theme as MuiTheme,
  ThemeOptions as MuiThemeOptions,
} from '@material-ui/core';
import {
  Palette as MuiPalette,
  TypeBackground,
} from '@material-ui/core/styles/createPalette';

export interface Background extends TypeBackground {
  light?: string;
}

export interface Palette extends MuiPalette {
  background: Background;
}

export interface Theme extends MuiTheme {
  palette: Palette;
}

export interface ThemeOptions extends MuiThemeOptions {
  palette: Palette;
}
