import React from 'react'
import { Box, ThemeProvider, Typography, createTheme } from '@mui/material'
import { worksDemoData } from '../../static/data/worksDemoData'

const portfolioImage = worksDemoData.Portfolio[0].data

const PortfolioDetail: React.FC = () => {
  const theme = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          subtitle1: {
            fontWeight: 'bold',
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
              src="https://img.shields.io/badge/-React-F5F5F5.svg?logo=react&style=for-the-badge"
              style={{ marginRight: 5 }}
            />
            <img
              src="https://img.shields.io/badge/-TypeScript-F5F5F5.svg?logo=typescript&style=for-the-badge"
              style={{ marginRight: 5 }}
            />
            <img src="https://img.shields.io/badge/-Node.js-F5F5F5.svg?logo=node.js&style=for-the-badge" />
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
          <Typography variant="body2">{'現在閲覧いただいているポートフォリオサイトです。'}</Typography>
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
            {'Reactに興味があったため、始めるきっかけとして自分の経歴やスキルを表現できるものを作成しました。'}
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
            {'Material UIを使用し、シンプルで見やすいデザインになるように心がけました。\n'}
            {'Skillsには業務や個人開発で使用した言語や技術を個人的にどの程度の理解度があるかを含め表示しています。\n'}
            {'Worksには個人で開発したものをデモやGitHubリポジトリを含め掲載しています。'}
          </Typography>
        </Box>
      </>
    )
  }

  const DemoSection: React.FC = () => {
    return (
      <>
        <Box mt={3}>
          <Typography variant="subtitle1">Demo</Typography>
          <img src={portfolioImage} alt="portfolio_image" style={{ maxWidth: '90%' }} />
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
        <DemoSection />
      </ThemeProvider>
    </>
  )
}

export default PortfolioDetail
