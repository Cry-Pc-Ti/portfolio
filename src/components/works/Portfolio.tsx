import React from 'react'
import { Box, ThemeProvider, Typography, createTheme } from '@mui/material'

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

  const OverviewSection: React.FC = () => {
    return (
      <>
        <Box>
          <Typography variant="subtitle1">Overview</Typography>
          <Typography variant="body2">{'このポートフォリオは、自己紹介ページです。'}</Typography>
        </Box>
      </>
    )
  }

  const BackgroundSection: React.FC = () => {
    return (
      <>
        <Box mt={3}>
          <Typography variant="subtitle1">Background</Typography>
          <Typography variant="body2">{'このサイトは、自己紹介をするために開発しました。'}</Typography>
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
            {'このサイトには、xxx画面とxxx機能があります。ユーザーはxxxを行うためにxxxを使用することができます。'}
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
          <Typography variant="body2">Demo</Typography>
        </Box>
      </>
    )
  }

  const RequirementSection: React.FC = () => {
    return (
      <>
        <Box mt={3}>
          <Typography variant="subtitle1">Requirement</Typography>
          <Typography variant="body2">{'TypeScript, React, Material-UI'}</Typography>
        </Box>
      </>
    )
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <OverviewSection />
        <BackgroundSection />
        <DescriptionSection />
        <DemoSection />
        <RequirementSection />
      </ThemeProvider>
    </>
  )
}

export default PortfolioDetail
