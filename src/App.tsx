import React from 'react';
import Navbar from './components/Navbar';
import MyAvatar from './components/MyAvatar';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import ScrollUp from './utils/ScrollUp';
import { Box, ThemeProvider, createTheme } from '@mui/material';

const App: React.FC = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ fontFamily: theme.typography.fontFamily }}>
          <section>
            <Navbar />
          </section>
          <Box pb={7}>
            <section>
              <MyAvatar />
            </section>
          </Box>
          <Box pb={7}>
            <section id="about">
              <About />
            </section>
          </Box>
          <Box pb={7}>
            <section id="skills">
              <Skills />
            </section>
          </Box>
          <Box pb={7}>
            <section id="works">
              <Works />
            </section>
          </Box>
          <Box pb={7}>
            <section id="contact">
              <Contact />
            </section>
          </Box>
        </Box>
      </ThemeProvider>
      <ScrollUp />
    </>
  );
};

export default App;
