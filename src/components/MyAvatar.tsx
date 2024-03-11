import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// 画像ファイルをインポート
import ImageFile from '../static/images/my_avatar.png';

// スタイルを定義
const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(30),
  height: theme.spacing(30),
}));

const MyAvatar: React.FC = () => {
  return (
    <Box p={2}>
      <Box display="flex" justifyContent="center" p={1}>
        <LargeAvatar alt="Taito Imura" src={ImageFile} />
      </Box>
      <Box display="flex" justifyContent="center" p={1}>
        <Typography variant="h5">TAITO IMURA</Typography>
      </Box>
      <Box display="flex" justifyContent="center" p={1}>
        <Typography variant="body1">Enginner</Typography>
      </Box>
    </Box>
  );
};

export default MyAvatar;
