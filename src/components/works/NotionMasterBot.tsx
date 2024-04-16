import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Box, IconButton, Typography, createTheme } from '@mui/material'
import { NavigateBefore, NavigateNext } from '@mui/icons-material'
import { worksDemoData } from '../../static/data/worksDemoData'

const demoData = worksDemoData.NotionMasterBot

const NotionMasterBotDetail: React.FC = () => {
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
      <Box>
        <Typography variant="subtitle1">Overview</Typography>
        <Typography variant="body2">
          {'Notionの操作をDiscordを経由して行うBotです\n'}
          {'Notion : ノートやプロジェクトを管理するためのツール\n'}
          {'Discord : ゲーマー向けのコミュニケーションツール'}
        </Typography>
      </Box>
    )
  }

  const BackgroundSection: React.FC = () => {
    return (
      <Box mt={3}>
        <Typography variant="subtitle1">Background</Typography>
        <Typography variant="body2">
          {'大学生の頃からNotionを使い続けてきましたが、スマホでの操作がイマイチだと感じる面が多々ありました'}
        </Typography>
      </Box>
    )
  }

  const DescriptionSection: React.FC = () => {
    return (
      <Box mt={3}>
        <Typography variant="subtitle1">Description</Typography>
        <Typography variant="body2">
          {'このサービスには、xxx画面とxxx機能があります。ユーザーはxxxを行うためにxxxを使用することができます。'}
        </Typography>
      </Box>
    )
  }

  const DemoSection: React.FC<{ demo: { name: string; gif: string }[] }> = ({ demo }) => {
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
            <img src={demo[currentDemo].gif} alt="ValorantBotDemo" style={{ maxWidth: '90%' }} />
            <IconButton onClick={handleNext}>
              <NavigateNext />
            </IconButton>
          </Box>
        </Box>
      </>
    )
  }

  const RequirementSection: React.FC = () => {
    return (
      <Box mt={3}>
        <Typography variant="subtitle1">Requirement</Typography>
        <Typography variant="body2">{'TypeScript, Node.js(Notion API, Discord.js)'}</Typography>
      </Box>
    )
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <OverviewSection />
        <BackgroundSection />
        <DescriptionSection />
        <DemoSection demo={demoData} />
        <RequirementSection />
      </ThemeProvider>
    </>
  )
}

export default NotionMasterBotDetail
