import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0b5ed7', // Bootstrap primary-ish
    },
    error: {
      main: '#dc3545', // Bootstrap danger red
    },
    background: {
      default: '#f8fbff',
    },
  },
  typography: {
    fontFamily: ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.01em',
    },
  },
  shape: {
    borderRadius: 14,
  },
})

