import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f8fafc', // Tailwind bg-slate-50
      paper: '#ffffff',
    },
    primary: {
      main: '#0369a1', // Tailwind primary color
    },
    secondary: {
      main: '#64748b', // Tailwind text-muted
    },
    text: {
      primary: '#0f172a', // Tailwind text-main
      secondary: '#64748b', // Tailwind text-muted
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
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
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: 'none',
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
