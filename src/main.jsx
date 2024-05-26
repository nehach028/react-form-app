import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#20AD67',
      contrastText: '#FFFFFF'
    },
  },
  typography: {
    fontFamily: 'Poppins',
    body1: {
      fontWeight: 500,
    }
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
