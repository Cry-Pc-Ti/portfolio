import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const About: React.FC = () => {
  const aboutMe =
    '1999年生まれ 奈良県出身\n大学で建築やデザインを学んだのち、1年半東京のIT企業に就職\nローコードを中心とした社内アプリの開発に従事\n技術力向上のため、DiscordのBotを中心に個人開発を開始\n現在、職業訓練校にてJava・Pythonを学習中'

  return (
    <>
      <Box p={2} pb={9}>
        <Box display="flex" justifyContent="center" pb={3}>
          <Typography variant="h5" style={{ fontWeight: 'bold' }}>
            About
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" pl={2} pr={2}>
          <Typography variant="body2">{aboutMe}</Typography>
        </Box>
      </Box>
    </>
  )
}

export default About
