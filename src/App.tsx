import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { Home } from './pages/Home'
import { ThemeProvider } from './theme/ThemeProvider'

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App
