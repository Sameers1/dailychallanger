import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      light: '#757de8',
      dark: '#002984'
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081',
      dark: '#c51162'
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c'
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00'
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      letterSpacing: '-0.01562em'
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      letterSpacing: '-0.00833em'
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      letterSpacing: '0em'
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em'
    }
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          padding: '10px 24px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)'
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)'
          }
        },
        outlined: {
          borderWidth: 2
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          padding: '0 8px',
          minWidth: 24,
          height: 24,
          borderRadius: 12
        }
      }
    }
  }

});

export default theme;