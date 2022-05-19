import '@styles/globals.css'
import { ThemeProvider, StyledEngineProvider, CssBaseline } from '@mui/material'
import theme from '@themes/root'
import Header from '@components/globals/Header'
import type { CustomAppProps } from '@type/index'

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          headerHeight={Component.headerHeight}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default MyApp
