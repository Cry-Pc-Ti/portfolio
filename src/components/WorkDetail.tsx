import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface WorkDetailProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const WorkDetail: React.FC<WorkDetailProps> = ({ open, onClose, title, description }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      sx={{ '& .MuiDialog-paper': { width: '85%', height: '85%' } }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {title}
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{description}</DialogContent>
    </Dialog>
  );
};

export default WorkDetail;