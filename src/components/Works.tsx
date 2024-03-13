import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Grid, styled, useMediaQuery, useTheme } from '@mui/material';
import WorkDetail from './WorkDetail';
import { languageData } from '../utils/languageData';
import notion_bot_icon from '../static/images/notion_master_bot_icon.png';
import valorant_bot_icon from '../static/images/valorant_picker_bot_icon.png';

const LanguageIcon = styled('img')({
  width: 20,
  height: 20,
});

const WorkItem: React.FC<{
  title: string;
  description: string;
  icon: string;
  languages: string[];
}> = ({ title, description, icon, languages }) => {
  const [workDetailOpen, setWorkDetailOpen] = useState(false);

  const handleWorkDetailOpen = () => {
    setWorkDetailOpen(true);
  };

  const handleWorkDetailClose = () => {
    setWorkDetailOpen(false);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Card
        onClick={handleWorkDetailOpen}
        style={{ cursor: 'pointer' }}
        sx={{ width: isSmallScreen ? '88vw' : 680 }}
      >
        <CardContent>
          <Box display="flex" alignItems="center">
            <Box marginRight={2}>
              <img src={icon} style={{ width: 45, height: 45 }} alt={title} />
            </Box>
            <Box>
              <Typography variant="body1" fontWeight="fontWeightBold">
                {title}
              </Typography>
              <Typography variant="body2">{description}</Typography>
            </Box>
            <Box display="flex-end" justifyContent="flex-end" marginTop="auto" marginLeft="auto">
              <Grid container spacing={1}>
                {languages.map((language, index) => (
                  <Grid item key={index}>
                    <LanguageIcon
                      src={languageData.find((l) => l.name === language)?.icon ?? ''}
                      alt={language}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <WorkDetail
        open={workDetailOpen}
        onClose={handleWorkDetailClose}
        title={title}
        description={description}
        icon={icon}
      />
    </>
  );
};

const Works: React.FC = () => {
  const works = [
    {
      title: 'Notion Master Bot',
      description: 'Connect to Notion on Discord',
      icon: notion_bot_icon,
      languages: ['TypeScript', 'Node.js'],
    },
    {
      title: 'ウィングマンくん',
      description: 'Valorant Bot for Custom Match',
      icon: valorant_bot_icon,
      languages: ['TypeScript', 'Node.js'],
    },
  ];

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5" style={{ fontWeight: 'bold' }}>
            Works
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Grid container spacing={2} justifyContent="flex-start" style={{ maxWidth: '1240px' }}>
            {works.map((work, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <WorkItem
                  title={work.title}
                  description={work.description}
                  icon={work.icon}
                  languages={work.languages}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Works;
