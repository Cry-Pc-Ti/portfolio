import React from 'react'
import { Box, IconButton, ThemeProvider, Typography, createTheme } from '@mui/material'
import { NavigateBefore, NavigateNext } from '@mui/icons-material'
import { worksData } from '../../static/data/worksDemoData'

const demoGif = worksData.ValorantCustomBot

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          fontWeight: 'bold',
        },
        body2: {
          ml: 1,
        },
      },
    },
  },
})

const OverviewSection: React.FC = () => {
  return (
    <>
      <Box>
        <Typography variant="subtitle1">Overview</Typography>
        <Typography variant="body2">
          {'Valorantでのカスタムマッチを支援するDiscord Botです\n'}
          {'エージェントやマップのランダムな指定や、チーム分けを自動で行います\n\n'}
          {'Discord : ゲーマー向けのコミュニケーションツール\n'}
          {'Valorant : Riot Gamesが開発した5v5の爆破系FPSゲーム'}
        </Typography>
      </Box>
    </>
  )
}

const BackgroundSection: React.FC = () => {
  return (
    <>
      <Box mt={3}>
        <Typography variant="subtitle1">Background</Typography>
        <Typography variant="body2">
          {'Valorantのカスタムマッチを円滑に進めるために開発しました\n'}
          {'特にエージェントの選択はマップによってメタが固定化されているため、ランダムで選択する機能を実装しました'}
        </Typography>
      </Box>
    </>
  )
}

const DescriptionSection: React.FC = () => {
  return (
    <>
      <Box mt={3}>
        <Typography variant="subtitle1">Description</Typography>
        <Typography variant="body2">
          {'このBotは、xxx画面とxxx機能があります。ユーザーはxxxを行うためにxxxを使用することができます。'}
        </Typography>
      </Box>
    </>
  )
}

const RequirementSection: React.FC = () => {
  return (
    <>
      <Box mt={3}>
        <Typography variant="subtitle1">Requirement</Typography>
        <Typography variant="body2">{'TypeScript, Node.js(Notion API, Discord.js)'}</Typography>
      </Box>
    </>
  )
}

const WingmanBotDetail: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <OverviewSection />
        <BackgroundSection />
        <DescriptionSection />
        <RequirementSection />
      </ThemeProvider>
    </>
  )
}

export default WingmanBotDetail
