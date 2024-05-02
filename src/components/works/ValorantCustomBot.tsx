import React from 'react'
import { Box, IconButton, ThemeProvider, Typography, createTheme } from '@mui/material'
import { NavigateBefore, NavigateNext } from '@mui/icons-material'
import { worksDemoData } from '../../static/data/worksDemoData'

const demoData = worksDemoData.ValorantCustomBot

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

const RequirementSection: React.FC = () => {
  return (
    <>
      <Box>
        <Typography variant="subtitle1">Requirement</Typography>
        <Box display="flex" alignItems="center">
          <img
            src="https://img.shields.io/badge/-TypeScript-F5F5F5.svg?logo=typescript&style=for-the-badge"
            style={{ marginRight: 5 }}
          />
          <img
            src="https://img.shields.io/badge/-Node.js-F5F5F5.svg?logo=node.js&style=for-the-badge"
            style={{ marginRight: 5 }}
          />
          <img src="https://img.shields.io/badge/-Discord.js-F5F5F5.svg?logo=discord&style=for-the-badge" />
        </Box>
      </Box>
    </>
  )
}

const OverviewSection: React.FC = () => {
  return (
    <>
      <Box mt={3}>
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
          {'このBotは基本的にスラッシュコマンドを用いて使用します。\n\n'}
          {'〇Valorantコマンド\n'}
          {'   ・agent : ランダムでエージェントを指定します。\n'}
          {'   ・composition : ランダムで編成を指定します。\n'}
          {'   ・map : ランダムでマップを指定します。\n'}
          {'   ・team : ランダムでチーム分けを行います。\n\n'}
          {'〇Diceコマンド\n'}
          {'   ・dice : 1~100の数字をランダムで出力します。\n'}
          {'   ・chinchiro : チンチロで遊ぶことができます。\n\n'}
          {'〇Musicコマンド\n'}
          {'   ・play : YouTubeの音楽を再生します。\n'}
        </Typography>
      </Box>
    </>
  )
}

const DemoSection: React.FC<{ demo: { name: string; data: string }[] }> = ({ demo }) => {
  const [currentDemo, setCurrentDemo] = React.useState(0)

  const handlePrevious = () => {
    setCurrentDemo((prevIndex) => (prevIndex === 0 ? demo.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentDemo((prevIndex) => (prevIndex === demo.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <>
      <Box mt={3}>
        <Typography variant="subtitle1">Demo</Typography>
        <Typography variant="subtitle2">{demo[currentDemo].name}</Typography>
        <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
          <IconButton onClick={handlePrevious}>
            <NavigateBefore />
          </IconButton>
          <img src={demo[currentDemo].data} alt="ValorantBotDemo" style={{ maxWidth: '90%' }} />
          <IconButton onClick={handleNext}>
            <NavigateNext />
          </IconButton>
        </Box>
      </Box>
    </>
  )
}

const WingmanBotDetail: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RequirementSection />
        <OverviewSection />
        <BackgroundSection />
        <DescriptionSection />
        <DemoSection demo={demoData} />
      </ThemeProvider>
    </>
  )
}

export default WingmanBotDetail
