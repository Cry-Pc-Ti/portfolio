import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/system';
import { green, purple } from '@mui/material/colors';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const Contact: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5" style={{ fontWeight: 'bold' }}>
            Contact
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Link href="#" color="inherit">
            <StyledAvatar sx={{ bgcolor: green[500] }}>
              <MailIcon />
            </StyledAvatar>
          </Link>
          <Link href="#" color="inherit">
            <StyledAvatar sx={{ bgcolor: purple[500] }}>
              <GitHubIcon />
            </StyledAvatar>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
