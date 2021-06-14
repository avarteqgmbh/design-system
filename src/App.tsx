import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import { theme } from './theme/theme';
import { Home } from './pages/Home';

function App() {
  const muiTheme = createMuiTheme(theme)
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
