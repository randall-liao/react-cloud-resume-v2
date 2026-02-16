import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    primary: {
      main: '#00ff9d', // A nice terminal green
    },
    secondary: {
      main: '#00bcd4', // Cyan
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Fira Code", monospace',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Fira Code", monospace',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Fira Code", monospace',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Fira Code", monospace',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Fira Code", monospace',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Fira Code", monospace',
      fontWeight: 500,
    },
    button: {
      fontFamily: '"Fira Code", monospace',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Sharp edges for technical feel
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Remove default gradient in dark mode
          border: '1px solid #333',
        },
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
