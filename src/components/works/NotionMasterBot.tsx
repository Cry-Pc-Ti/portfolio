import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Box, Typography, createTheme } from '@mui/material'

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
          {'このBotは、xxxするためのプラットフォームです。ユーザーはxxxを行い、xxxを管理することができます。'}
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
            'このサービスは、xxxの問題に対処するために開発されました。xxxを改善するために、xxxを提供する必要がありました。 '
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
          {'このサービスには、xxx画面とxxx機能があります。ユーザーはxxxを行うためにxxxを使用することができます。'}
        </Typography>
      </Box>
    )
  }

  const DemoSection: React.FC = () => {
    return (
      <Box mt={3}>
        <Typography variant="subtitle1">Demo</Typography>
        <Typography variant="body2">Demo</Typography>
      </Box>
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
        <DemoSection />
        <RequirementSection />
      </ThemeProvider>
    </>
  )
}

export default NotionMasterBotDetail
