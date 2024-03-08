import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import styled from '@mui/material/styles/styled';
import WorkDetail from './WorkDetail';
import notionBotImageFile from '../static/images/notion_master_bot_icon.jpg';
import valorantBotImageFile from '../static/images/valorant_picker_bot.jpg';

const StyledList = styled(List)({
  width: 770,
  maxWidth: '100%',
});

const Works: React.FC = () => {
  const [workDetailOpen, setWorkDetailOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<{ title: string; description: string } | null>(
    null
  );

  const handleWorkDetailOpen = (title: string, description: string) => {
    setSelectedWork({ title, description });
    setWorkDetailOpen(true);
  };

  const handleWorkDetailClose = () => {
    setWorkDetailOpen(false);
    setSelectedWork(null);
  };

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Works</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <StyledList>
            <ListItemButton
              onClick={() => handleWorkDetailOpen('Notion Master Bot', 'Work1です。')}
            >
              <ListItemAvatar>
                <Avatar src={notionBotImageFile} alt="Notion Master Bot Icon" />
              </ListItemAvatar>
              <ListItemText
                primary="Notion Master Bot"
                secondary="Node.js TypeScript NotionAPI Discord.js"
              />
            </ListItemButton>
            <ListItemButton onClick={() => handleWorkDetailOpen('Work2', 'Work2です。')}>
              <ListItemAvatar>
                <Avatar src={valorantBotImageFile} alt="Valorant Picker Bot" />
              </ListItemAvatar>
              <ListItemText
                primary="Valorant Picker Bot"
                secondary="Node.js TypeScript Discord.js"
              />
            </ListItemButton>
          </StyledList>
        </Box>
      </Box>
      <WorkDetail
        open={workDetailOpen}
        onClose={handleWorkDetailClose}
        title={selectedWork?.title || ''}
        description={selectedWork?.description || ''}
      />
    </>
  );
};

export default Works;
