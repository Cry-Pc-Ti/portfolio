import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, Typography } from '@mui/material';
import NotionMasterBotDetail from './product/NotionMasterBot';
import WingmanBotDetail from './product/WingmanBot';

interface WorkDetailProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon: string;
}

const WorkDetail: React.FC<WorkDetailProps> = ({ open, onClose, title, description, icon }) => {
  const renderDetailPage = () => {
    switch (title) {
      case 'Notion Master Bot':
        return <NotionMasterBotDetail />;
      case 'ウィングマンくん':
        return <WingmanBotDetail />;
      default:
        return null;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      sx={{ '& .MuiDialog-paper': { width: '85%', height: '85%' } }}
    >
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ position: 'absolute', right: '10px', top: '10px' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" alignItems="center" mb={3}>
          <img
            src={icon}
            alt={title}
            style={{ marginRight: '10px', width: '50px', height: '50px' }}
          />
          <Box display="flex" alignItems="baseline">
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography variant="h6" paddingLeft={1} sx={{ fontWeight: 'lighter' }}>
              {` - ${description}`}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ marginTop: '8px', marginBottom: '8px' }} />
        <Box mt={3} paddingLeft="19px">
          {renderDetailPage()}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default WorkDetail;
