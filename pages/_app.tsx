import '@styles/globals.css'
import { ThemeProvider } from '@mui/material'
import theme from '@themes/root'
import Header from '@components/globals/Header'
import type { CustomAppProps } from '@type/index'

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header
        headerHeight={Component.headerHeight}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
