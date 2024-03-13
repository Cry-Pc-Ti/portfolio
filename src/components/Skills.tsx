import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { languageData } from '../utils/languageData';

interface SkillItemProps {
  label: string;
  icon: string;
  rating: number;
  comment: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ label, icon, rating, comment }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon key={index} color={index < rating ? 'primary' : 'disabled'} />
  ));

  return (
    <Card sx={{ width: isSmallScreen ? '88vw' : 680 }}>
      <CardContent>
        <Box display="flex" alignItems="flex-end" marginLeft={2}>
          <Box display="inline" alignItems="center" marginRight={5}>
            <Box display="flex" alignItems="center">
              <img src={icon} alt={label} style={{ width: 30, height: 30 }} />
              <Typography variant="body1" fontWeight="fontWeightBold" marginLeft={1}>
                {label}
              </Typography>
            </Box>
            <Box display="flex" marginTop={1}>
              {stars}
            </Box>
          </Box>
          <Box display="flex">
            <Typography variant="body2" color="textSecondary">
              {comment}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const Skills: React.FC = () => {
  const skills = [
    {
      label: 'JavaScript',
      icon: languageData.find((l) => l.name === 'JavaScript')?.icon ?? '',
      rating: 4,
      comment: '前職のプロジェクトや個人開発で使用',
    },
    {
      label: 'Java',
      icon: languageData.find((l) => l.name === 'Java')?.icon ?? '',
      rating: 2,
      comment: '短い期間のプロジェクトだが実務経験あり\n職業訓練校にて学習',
    },
    {
      label: 'TypeScript',
      icon: languageData.find((l) => l.name === 'TypeScript')?.icon ?? '',
      rating: 4,
      comment: '独学で習得し、個人開発で使用\n基本的なことは理解しているが、実務経験はなし',
    },
    {
      label: 'Node.js',
      icon: languageData.find((l) => l.name === 'Node.js')?.icon ?? '',
      rating: 3,
      comment: '独学で習得し、個人開発で使用\n基本的なことは理解しているが、実務経験はなし',
    },
    {
      label: 'Python',
      icon: languageData.find((l) => l.name === 'Python')?.icon ?? '',
      rating: 3,
      comment: '職業訓練校にて学習',
    },
    {
      label: 'React',
      icon: languageData.find((l) => l.name === 'React')?.icon ?? '',
      rating: 2,
      comment: '本ポートフォリオサイトの作成にて学習・使用',
    },
    {
      label: 'AWS',
      icon: languageData.find((l) => l.name === 'AWS')?.icon ?? '',
      rating: 1,
      comment: '独学で習得し、個人開発にてLightSailを使用',
    },
  ];

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={2}>
          <Typography variant="h5" style={{ fontWeight: 'bold' }}>
            Skills
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Grid container spacing={2} justifyContent="flex-start" style={{ maxWidth: '1240px' }}>
            {skills.map((skill, index) => (
              <Grid item key={index} sm={12} lg={6}>
                <SkillItem
                  icon={skill.icon}
                  label={skill.label}
                  rating={skill.rating}
                  comment={skill.comment}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
