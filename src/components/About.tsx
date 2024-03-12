import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About: React.FC = () => {
  const aboutMe =
    '1999年生まれ 奈良県出身\n大学で建築や都市計画、デザインを学んだのち、\n1年半東京のIT企業にて主に社内アプリの開発に従事\n技術力向上のため、個人開発をはじめる\n現在、訓練校にてJava・Pythonを学習中';

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5" style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
            About
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
            {aboutMe}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
