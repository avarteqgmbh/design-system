import { theme } from '../src/theme/theme';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const providerFn = ({ theme, children }) => {
  const muTheme = createMuiTheme(theme);
  return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>;
};

addDecorator(withThemes(null, [theme], { providerFn }));
