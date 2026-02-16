import { PaletteMode } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light Mode
          primary: {
            main: '#0369a1', // Existing primary
          },
          secondary: {
            main: '#64748b',
          },
          background: {
            default: '#f8fafc',
            paper: '#ffffff',
          },
          text: {
            primary: '#0f172a',
            secondary: '#64748b',
          },
        }
      : {
          // Dark Mode
          primary: {
            main: '#137fec', // From Stitch Dark Mode
          },
          secondary: {
            main: '#a0a1a7',
          },
          background: {
            default: '#0a0a0a', // From Stitch Dark Mode
            paper: '#16202a',   // From Stitch Mobile Dark Mode
          },
          text: {
            primary: '#f6f7f8',
            secondary: '#a0a1a7',
          },
        }),
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
          border: 'none', // Remove default border in dark mode if desired, or handle via sx
        },
      },
    },
  },
});
