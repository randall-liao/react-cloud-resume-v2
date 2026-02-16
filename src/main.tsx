import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'light',
<<<<<<< HEAD
    primary: {
      main: '#007acc',
    },
    secondary: {
      main: '#008080',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#1f2937',
      secondary: '#4b5563',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
=======
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
>>>>>>> main
    h1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
    // @ts-ignore
    fontFamilyMono: '"Fira Code", monospace',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
<<<<<<< HEAD
=======
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: 'none',
>>>>>>> main
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
