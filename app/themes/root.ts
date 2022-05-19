import { createTheme, alpha } from '@mui/material'
import type { Theme } from '@mui/material'

type Color = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'inherit' | 'error' | undefined
type ColorLevel = 'main' | 'light' | 'dark' | 'contrastText'

function getComponentColor(color: Color, theme: Theme, colorLevel: ColorLevel, opacity?: number) {
  if (color === undefined)
    return

  if(color === 'inherit')
    return 'inherit'

  return alpha(theme.palette[color][colorLevel], opacity || 1)
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f9fff'
    },
    secondary: {
      main: '#fff',
      contrastText: '#000'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: ({ ownerState, theme }) => ({
          ':hover': {
            backgroundColor: getComponentColor(ownerState.color, theme, 'main', 0.7),
            color: getComponentColor(ownerState.color, theme, 'contrastText')
          }
        })
      }
    }
  },
  typography: {
    allVariants: {
      fontFamily: 'Meslo LGS'
    }
  }
})

export default theme
