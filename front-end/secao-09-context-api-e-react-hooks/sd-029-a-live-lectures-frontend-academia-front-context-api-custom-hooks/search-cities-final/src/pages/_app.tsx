import React from 'react'

import { type AppProps } from 'next/app'

import { CacheProvider, type EmotionCache } from '@emotion/react'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import LocalizationProvider from '@/contexts/localizationProvider'

import createEmotionCache from '@/styles/createEmotionCache'
import theme from '@/styles/theme'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider>
          <Component {...pageProps} />
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
