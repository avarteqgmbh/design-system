import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { theme } from './theme/theme';
import { Home } from './pages/Home';
import { ThemeProvider } from './theme/ThemeProvider';

function App() {
  const muiTheme = createMuiTheme(theme)
  return (
    <ThemeProvider>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
