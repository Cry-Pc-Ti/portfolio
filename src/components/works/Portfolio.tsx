import { Box, Divider, ThemeProvider, Typography, createTheme } from '@mui/material';

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
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography variant="subtitle1">Overview</Typography>
        <Typography variant="body2">
          {
            'このBotは、xxxするためのプラットフォームです。ユーザーはxxxを行い、xxxを管理することができます。'
          }
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="subtitle1">Background</Typography>
        <Typography variant="body2">
          {
            'このサービスは、xxxの問題に対処するために開発されました。xxxを改善するために、xxxを提供する必要がありました。 '
          }
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="subtitle1">Description</Typography>
        <Typography variant="body2">
          {
            'このサービスには、xxx画面とxxx機能があります。ユーザーはxxxを行うためにxxxを使用することができます。'
          }
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="subtitle1">Demo</Typography>
        <Typography variant="body2">Demo</Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="subtitle1">Requirement</Typography>
        <Typography variant="body2">{'TypeScript, Node.js(Notion API, Discord.js)'}</Typography>
      </Box>
      <Divider sx={{ mt: '32px', mb: '8px' }} />
      <Box mt={3}>
        <Typography variant="subtitle1">Github</Typography>
        <Typography variant="body2">
          {'プロジェクトのGithubリポジトリはこちら: '}
          <a href="https://github.com/your-username/your-repo">
            https://github.com/your-username/your-repo
          </a>
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default PortfolioDetail;
