import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Grid } from '@mui/material';
import WorkDetail from './WorkDetail';
import notion_bot_icon from '../static/images/notion_master_bot_icon.png';
import valorant_bot_icon from '../static/images/valorant_picker_bot_icon.png';
import NotionMasterBotDetail from './product/NotionMasterBot';
import WingmanBotDetail from './product/WingmanBot';

const WorkItem: React.FC<{ title: string; description: string; icon: string }> = ({
  title,
  description,
  icon,
}) => {
  const [workDetailOpen, setWorkDetailOpen] = useState(false);

  const handleWorkDetailClose = () => {
    setWorkDetailOpen(false);
  };

  // タイトルに応じて詳細ページを切り替える
  const renderWorkDetail = () => {
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
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Box marginRight={2}>
            <img src={icon} style={{ width: 45, height: 45 }} />
          </Box>
          <Box>
            <Typography variant="body1" fontWeight="fontWeightBold">
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </Box>
        </Box>
      </CardContent>
      <WorkDetail open={workDetailOpen} onClose={handleWorkDetailClose} title={title}>
        {renderWorkDetail()}
      </WorkDetail>
    </Card>
  );
};

const Works: React.FC = () => {
  const works = [
    {
      title: 'Notion Master Bot',
      description: 'Connect Notion On Discord',
      icon: notion_bot_icon,
    },
    {
      title: 'ウィングマンくん',
      description: 'Valorant Random Picker',
      icon: valorant_bot_icon,
    },
  ];

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5" style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
            Works
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Grid container spacing={2} justifyContent="flex-start" style={{ maxWidth: '1240px' }}>
            {works.map((work, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <WorkItem title={work.title} description={work.description} icon={work.icon} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Works;
