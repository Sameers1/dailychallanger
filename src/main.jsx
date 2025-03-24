import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import App from './App'
import themes from './theme'

const Root = () => {
  const [currentTheme, setCurrentTheme] = React.useState(() => {
    const saved = localStorage.getItem('selectedTheme');
    return saved || 'default';
  });

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <CssBaseline />
      <App currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)