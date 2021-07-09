export const overrides = {
  MuiCssBaseline: {
    '@global': {
      '& .MuiGridPanel-root': {
        background: 'red !important'
      }
    }
  },
  MuiGridPanel: {
    background: 'red'
  },
  MuiTooltip: {
    tooltip: {
      fontSize: '1rem'
    }
  },
  MuiTabs: {
    indicator: {
      background: 'transparent'
    }
  }
}
