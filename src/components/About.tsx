import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">About</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="body1" textAlign="center">
            1999年生まれ 奈良県在住
            <br />
            1年半、東京のIT企業にて勤務
            <br />
            半年間、訓練校にてプログラミングを学習
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
