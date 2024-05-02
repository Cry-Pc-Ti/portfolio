import React from 'react'
import Navbar from './components/Navbar'
import MyAvatar from './components/MyAvatar'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Footer from './components/Footer'
import ScrollUp from './utils/ScrollUp'
import { Box, ThemeProvider, createTheme } from '@mui/material'

const App: React.FC = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ fontFamily: theme.typography.fontFamily }}>
          <Navbar />
          <MyAvatar />
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="works">
            <Works />
          </section>
          <Footer />
          <ScrollUp />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
