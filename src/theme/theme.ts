import { colors } from './variables';

/* --------------------------------------------------
-- 🎨 B A S E   C O L O R S
-------------------------------------------------- */
const COLOR_WHITE = colors.white;
const COLOR_BLACK = colors.black;
const COLOR_TRANSPARENT = colors.transparent;

const COLOR_GREY_50 = colors.grey50;
const COLOR_GREY_100 = colors.grey100;
const COLOR_GREY_200 = colors.grey200;
const COLOR_GREY_300 = colors.grey300;
const COLOR_GREY_400 = colors.grey400;
const COLOR_GREY_500 = colors.grey500;
const COLOR_GREY_600 = colors.grey600;
const COLOR_GREY_700 = colors.grey700;
const COLOR_GREY_800 = colors.grey800;
const COLOR_GREY_900 = colors.grey900;

const COLOR_PRIMARY_LIGHT = colors.primaryLight;
const COLOR_PRIMARY_MAIN = colors.primaryMain;
const COLOR_PRIMARY_DARK = colors.primaryDark;

const COLOR_ERROR_LIGHT = colors.errorLight;
const COLOR_ERROR_MAIN = colors.errorMain;
const COLOR_ERROR_DARK = colors.errorDark;
const COLOR_ERROR_CONTRAST = COLOR_WHITE;

const COLOR_SUCCESS_LIGHT = colors.successLight;
const COLOR_SUCCESS_MAIN = colors.successMain;
const COLOR_SUCCESS_DARK = colors.successDark;
const COLOR_SUCCESS_CONTRAST = COLOR_WHITE;

const COLOR_WARNING_LIGHT = colors.warningLight;
const COLOR_WARNING_MAIN = colors.warningLight;
const COLOR_WARNING_DARK = colors.warningLight;
const COLOR_WARNING_CONTRAST = COLOR_WHITE;

const COLOR_INFO_LIGHT = colors.infoLight;
const COLOR_INFO_MAIN = colors.infoLight;
const COLOR_INFO_DARK = colors.infoLight;
const COLOR_INFO_CONTRAST = COLOR_WHITE;

// const GRADIENT_PRIMARY =
//   'linear-gradient(15.71deg, var(--color-primary-6) 10.98%, var(--color-primary-5) 89.02%)';
export const GRADIENT_LIGHT =
  'linear-gradient(360deg, #e1e9f9 0.06%, #f3f7ff 99.2%)';
export const GRADIENT_DARK =
  'linear-gradient(180deg, #293858 0%, #081123 100%)';
export const GRADIENT_PRIMARY = `linear-gradient(-15.71deg, ${colors.primary600} 10.98%, ${colors.primary400} 89.02%)`;

/* --------------------------------------------------
-- 💫 S P A C E
-------------------------------------------------- */
const SPACE_0 = 0;
const SPACE_1 = 2;
const SPACE_2 = 4;
const SPACE_3 = 8;
const SPACE_4 = 12;
const SPACE_5 = 16;
const SPACE_6 = 24;
const SPACE_7 = 32;
const SPACE_8 = 40;
const SPACE_9 = 60;
const SPACE_10 = 80;
const SPACE_11 = 120;

/* --------------------------------------------------
-- 🖋 T Y P E
-------------------------------------------------- */
// const TYPE_1 = 10;
const TYPE_2 = 12;
const TYPE_3 = 16;
const TYPE_4 = 20;
const TYPE_5 = 24;
const TYPE_6 = 32;
const TYPE_7 = 40;
const TYPE_8 = 60;

const DEFAULT_HEADING_PROPS: React.CSSProperties = {
  fontWeight: 700,
  marginBottom: '0.35em',
  marginTop: '0.35em',
};

export const palette = {
  grey: {
    50: COLOR_GREY_50,
    100: COLOR_GREY_100,
    200: COLOR_GREY_200,
    300: COLOR_GREY_300,
    400: COLOR_GREY_400,
    500: COLOR_GREY_500,
    600: COLOR_GREY_600,
    700: COLOR_GREY_700,
    800: COLOR_GREY_800,
    900: COLOR_GREY_900,
  },
  primary: {
    light: COLOR_PRIMARY_LIGHT,
    main: COLOR_PRIMARY_MAIN,
    dark: COLOR_PRIMARY_DARK,
    contrastText: COLOR_WHITE,
  },
  secondary: {
    light: COLOR_GREY_200,
    main: COLOR_GREY_300,
    dark: COLOR_GREY_400,
    contrastText: COLOR_GREY_800,
  },
  error: {
    light: COLOR_ERROR_LIGHT,
    main: COLOR_ERROR_MAIN,
    dark: COLOR_ERROR_DARK,
    contrastText: COLOR_ERROR_CONTRAST,
  },
  success: {
    light: COLOR_SUCCESS_LIGHT,
    main: COLOR_SUCCESS_MAIN,
    dark: COLOR_SUCCESS_DARK,
    contrastText: COLOR_SUCCESS_CONTRAST,
  },
  warning: {
    light: COLOR_WARNING_LIGHT,
    main: COLOR_WARNING_MAIN,
    dark: COLOR_WARNING_DARK,
    contrastText: COLOR_WARNING_CONTRAST,
  },
  info: {
    light: COLOR_INFO_LIGHT,
    main: COLOR_INFO_MAIN,
    dark: COLOR_INFO_DARK,
    contrastText: COLOR_INFO_CONTRAST,
  },
  background: {
    default: COLOR_GREY_100,
    paper: COLOR_WHITE,
  },
  text: {
    primary: COLOR_GREY_900,
    secondary: COLOR_GREY_700,
    disabled: COLOR_GREY_500,
  },
};

export const spacing = [
  SPACE_0,
  SPACE_1,
  SPACE_2,
  SPACE_3,
  SPACE_4,
  SPACE_5,
  SPACE_6,
  SPACE_7,
  SPACE_8,
  SPACE_9,
  SPACE_10,
  SPACE_11,
];

export const typography = {
  fontFamily: [
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  h1: {
    ...DEFAULT_HEADING_PROPS,
    fontSize: TYPE_8,
  },
  h2: {
    ...DEFAULT_HEADING_PROPS,
    fontSize: TYPE_7,
  },
  h3: {
    ...DEFAULT_HEADING_PROPS,
    fontSize: TYPE_6,
  },
  h4: {
    ...DEFAULT_HEADING_PROPS,
    fontSize: TYPE_5,
  },
  h5: {
    ...DEFAULT_HEADING_PROPS,
    fontSize: TYPE_4,
  },
  h6: {
    ...DEFAULT_HEADING_PROPS,
    fontSize: TYPE_3,
  },
  subtitle1: {
    fontSize: TYPE_4,
  },
  subtitle2: {
    fontSize: TYPE_3,
  },
  body1: {
    fontSize: TYPE_3,
  },
  body2: {
    fontWeight: 500,
    fontSize: TYPE_2,
  },
  button: {
    fontSize: TYPE_3,
    fontWeight: 700,
    borderRadius: SPACE_2,
  },
  caption: {
    fontWeight: 500,
    fontSize: TYPE_2,
  },
  overline: {
    fontSize: TYPE_2,
    color: COLOR_GREY_500,
  },
};

export const overrides = {
  MuiCssBaseline: {
    '@global': {
      body: {
        background: GRADIENT_LIGHT,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      },
    },
  },
  MuiTooltip: {
    tooltip: {
      fontSize: '1rem',
    },
  },
  MuiTabs: {
    indicator: {
      background: 'transparent',
    },
  },
};

export const theme = {
  palette: palette,
  overrides: { ...overrides },
  typography: typography,
  spacing: spacing,
};
