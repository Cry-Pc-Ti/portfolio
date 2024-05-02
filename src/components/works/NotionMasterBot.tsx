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
            maxWidth: '90%',
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
            <img
              src="https://img.shields.io/badge/-Discord.js-F5F5F5.svg?logo=discord&style=for-the-badge"
              style={{ marginRight: 5 }}
            />
            <img src="https://img.shields.io/badge/Notion API-F5F5F5?logo=notion&logoColor=000000&style=for-the-badge" />
          </Box>
        </Box>
      </>
    )
  }

  const OverviewSection: React.FC = () => {
    return (
      <Box mt={3}>
        <Typography variant="subtitle1">Overview</Typography>
        <Typography variant="body2">
          {'Notionのレコードの操作をDiscord上で行うBotです\n\n'}
          {'Notion : ノートやタスク、プロジェクトを管理できるオールインワンの生産性ツール\n'}
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
          {
            '大学生の頃から長らく愛用しているNotionですが、スマホ版の使い勝手が個人的なNotionの使い方との相性もあまり良くないことも相まって、少し使いづらく感じていました。\n'
          }
          {
            'そこでDiscordからタスクやメモの追加・確認等の操作が行えれば、スマホでもシームレスに使用できるのではないかと考え、開発をし始めました。'
          }
        </Typography>
      </Box>
    )
  }

  const DescriptionSection: React.FC = () => {
    return (
      <Box mt={3}>
        <Typography variant="subtitle1">Description</Typography>
        <Typography variant="body2">
          {'このBotは基本的にスラッシュコマンドを用いて使用します。\n\n'}
          {'〇Taskコマンド\n'}
          {'   ・add : タスクを追加します。\n'}
          {'   ・list : 相対日付を指定し、その日のタスクを一覧表示します。\n'}
          {'   ・check : 相対日付を指定し、該当のタスクを完了済みにします。\n\n'}
          {'〇Memoコマンド\n'}
          {'   ・add : メモを追加します。\n'}
          {'   ・search : 指定した条件からメモを検索します。\n\n'}
          {'〇Diaryコマンド : 相対日付を指定し、その日の日記を記入します。\n\n'}
          {'〇Clipコマンド : URLからWebサイトを保存します。'}
        </Typography>
      </Box>
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

export default NotionMasterBotDetail
