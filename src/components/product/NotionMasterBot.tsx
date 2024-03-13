import { Box, Divider, Typography } from '@mui/material';

const NotionMasterBotDetail: React.FC = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h6">概要</Typography>
        <Typography variant="body1">
          {
            'このBotは、xxxするためのプラットフォームです。ユーザーはxxxを行い、xxxを管理することができます。'
          }
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="h6">開発背景</Typography>
        <Typography variant="body1">
          {
            ' このサービスは、xxxの問題に対処するために開発されました。xxxを改善するために、xxxを提供する必要がありました。 '
          }
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="h6">画面や機能の説明</Typography>
        <Typography variant="body1">
          {
            'このサービスには、xxx画面とxxx機能があります。ユーザーはxxxを行うためにxxxを使用することができます。'
          }
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="h6">主な使用技術</Typography>
        <Typography variant="body1">{'TypeScript, Node.js(Notion API, Discord.js)'}</Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="h6">ER図</Typography>
        <Typography variant="body1">{'ER図は以下の通りです。'}</Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="h6">今後の展望</Typography>
        <Typography variant="body1">
          {'このサービスの今後の展望は、xxxを実装し、xxxを拡張することです。'}
        </Typography>
      </Box>
      <Divider sx={{ marginTop: '32px', marginBottom: '8px' }} />
      <Box mt={3}>
        <Typography variant="h6">Github</Typography>
        <Typography variant="body1">
          {'プロジェクトのGithubリポジトリはこちら: '}
          <a href="https://github.com/your-username/your-repo">
            https://github.com/your-username/your-repo
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default NotionMasterBotDetail;
