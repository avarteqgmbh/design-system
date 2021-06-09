import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './theme/theme';
import { Home } from './pages/Home';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
