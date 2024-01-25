import { createTheme } from '@mui/material/styles'
import { ptBR } from '@mui/x-data-grid'

import { Righteous } from '@next/font/google'

export const roboto = Righteous({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
})

// Create a theme instance.
const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#424242'
      },
      secondary: {
        main: '#6D4AEC'
      },
      error: {
        main: '#d63031'
      },
      success: {
        main: '#10ac84'
      },
      warning: {
        main: '#ff9f43'
      },
      background: {
        default: '#2d3436',
        paper: '#fff'
      }
    },
    typography: {
      fontFamily: roboto.style.fontFamily
    }
  },
  ptBR
)

export default theme
