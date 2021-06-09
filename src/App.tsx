import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { theme } from './theme/theme';
import { Home } from './pages/Home';

function App() {
  const muiTheme = createMuiTheme(theme)
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
