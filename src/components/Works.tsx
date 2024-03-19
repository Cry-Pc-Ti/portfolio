import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Grid, styled, useMediaQuery, useTheme } from '@mui/material';
import WorkDetail from './WorkDetail';
import { languageData } from '../static/languageData';
import notion_bot_icon from '../static/images/works_icon/notion_master_bot_icon.png';
import valorant_bot_icon from '../static/images/works_icon/valorant_picker_bot_icon.png';
import portfolio_icon from '../static/images/works_icon/portfolio_icon.png';

const AnimatedCard = styled(Card)({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.04)',
  },
});

const WorkItem: React.FC<{
  title: string;
  description: string;
  repositoryName: string;
  icon: string;
  languages: string[];
}> = ({ title, description, repositoryName, icon, languages }) => {
  const [workDetailOpen, setWorkDetailOpen] = useState(false);

  const handleWorkDetailOpen = () => {
    setWorkDetailOpen(true);
  };

  const handleWorkDetailClose = () => {
    setWorkDetailOpen(false);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const LanguageIcon = styled('img')({
    width: 20,
    height: 20,
    marginLeft: 2,
  });

  return (
    <>
      <AnimatedCard
        onClick={handleWorkDetailOpen}
        style={{ cursor: 'pointer' }}
        sx={{ width: isSmallScreen ? '88vw' : 'auto', maxWidth: '100%' }}
      >
        <CardContent>
          <Box display="flex" alignItems="center">
            <Box display="flex">
              <img src={icon} style={{ width: 30, height: 30 }} alt={title} />
            </Box>
            <Box pl={2} width={isSmallScreen ? '60%' : 'auto'}>
              <Typography variant="subtitle1" fontWeight="fontWeightBold">
                {title}
              </Typography>
              <Typography variant="body2">{description}</Typography>
            </Box>
            <Box display="flex-end" justifyContent="flex-end" mt="auto" marginLeft="auto">
              {languages.map((language) => (
                <LanguageIcon
                  src={languageData.find((l) => l.name === language)?.icon ?? ''}
                  alt={language}
                />
              ))}
            </Box>
          </Box>
        </CardContent>
      </AnimatedCard>
      <WorkDetail
        open={workDetailOpen}
        onClose={handleWorkDetailClose}
        title={title}
        description={description}
        repositoryName={repositoryName}
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
      repositoryName: 'notion-master-bot',
      icon: notion_bot_icon,
      languages: ['TypeScript', 'Node.js'],
    },
    {
      title: 'ウィングマンくん',
      description: 'Valorant Bot for Custom Match',
      repositoryName: 'valorant-picker-bot',
      icon: valorant_bot_icon,
      languages: ['TypeScript', 'Node.js'],
    },
    {
      title: 'Portfolio',
      description: 'This portfolio site',
      repositoryName: 'portfolio',
      icon: portfolio_icon,
      languages: ['TypeScript', 'React'],
    },
  ];

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" pb={3}>
          <Typography variant="h5" style={{ fontWeight: 'bold' }}>
            Works
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Grid container spacing={2} justifyContent="flex-start" style={{ maxWidth: '1080px' }}>
            {works.map((work, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <WorkItem
                  title={work.title}
                  description={work.description}
                  repositoryName={work.repositoryName}
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
