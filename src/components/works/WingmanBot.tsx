import { Box, Divider, ThemeProvider, Typography, createTheme } from '@mui/material';

const WingmanBotDetail: React.FC = () => {
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
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography variant="subtitle1">Overview</Typography>
        <Typography variant="body2" ml={1}>
          {
            'Valorantでのカスタムマッチを支援するDiscord Botです\nエージェントやマップをランダムで指定したり、チーム分けを自動で行います\n\n'
          }
          {
            'Discord : ゲーマー向けのコミュニケーションツール\nValorant : Riot Gamesが開発した5v5の爆破系FPSゲーム'
          }
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="subtitle1">Background</Typography>
        <Typography variant="body2" ml={1}>
          {
            'Valorantのカスタムマッチを円滑に進めるために開発しました\n特にエージェントの選択はマップによってメタが固定化されているため、ランダムで選択する機能を実装しました'
          }
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="subtitle1">Description</Typography>
        <Typography variant="body2" ml={1}>
          {'・Agent Command : 全エージェントからランダムで１人選択\n'}
          &emsp;&emsp;
          {
            'Option : ロール(デュエリスト, イニシエーター, コントローラー, センチネル)を選択可能\n\n'
          }
          {'・Composition Command : 全エージェントからランダムで１人選択\n'}
          &emsp;&emsp;
          {'Option : 各ロール(前述の４種)の人数を指定可能, Banしたエージェントを除外可能\n\n'}
          {'・Map Command : 全マップからランダムで１つ選択\n\n'}
          {'・Dice Command : 1～100の数字を１つ選択\n\n'}
          {'・Allocation Command : チーム分けを自動で行う\n\n'}
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="subtitle1">Demo</Typography>
        <Typography variant="body2" ml={1}>
          Demo
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="subtitle1">Requirement</Typography>
        <Typography variant="body2" ml={1}>
          {'TypeScript, Node.js (Discord.js)'}
        </Typography>
      </Box>
      <Divider sx={{ mt: '32px', mb: '8px' }} />
      <Box mt={3}>
        <Typography variant="subtitle1">Github</Typography>
      </Box>
    </ThemeProvider>
  );
};

export default WingmanBotDetail;
