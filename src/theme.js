import { createTheme } from '@mui/material/styles';

const defaultTheme = {
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
  }
};

const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5'
    },
    secondary: {
      main: '#f48fb1',
      light: '#fce4ec',
      dark: '#ec407a'
    },
    success: {
      main: '#66bb6a',
      light: '#e8f5e9',
      dark: '#43a047'
    },
    warning: {
      main: '#ffa726',
      light: '#fff3e0',
      dark: '#f57c00'
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e'
    }
  }
};

const natureTheme = {
  palette: {
    primary: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20'
    },
    secondary: {
      main: '#ff6d00',
      light: '#ff9e40',
      dark: '#c43e00'
    },
    success: {
      main: '#558b2f',
      light: '#7cb342',
      dark: '#33691e'
    },
    warning: {
      main: '#f9a825',
      light: '#fbc02d',
      dark: '#f57f17'
    },
    background: {
      default: '#f1f8e9',
      paper: '#ffffff'
    }
  }
};

const commonSettings = {
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
};

const themes = {
  default: createTheme({ ...defaultTheme, ...commonSettings }),
  dark: createTheme({ ...darkTheme, ...commonSettings }),
  nature: createTheme({ ...natureTheme, ...commonSettings })
};

export default themes;