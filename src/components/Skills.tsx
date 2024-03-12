import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import { Grid, useMediaQuery, useTheme } from '@mui/material';

// icons
import aws_icon from '../static/images/language/aws_icon.png';
import java_icon from '../static/images/language/java_icon.png';
import js_icon from '../static/images/language/javascript_icon.png';
import nodejs_icon from '../static/images/language/nodejs_icon.png';
import python_icon from '../static/images/language/python_icon.png';
import react_icon from '../static/images/language/react_icon.png';
import ts_icon from '../static/images/language/typescript_icon.png';

interface SkillItemProps {
  label: string;
  icon: string;
  rating: number;
  comment: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ label, icon, rating, comment }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const StyledCard = styled(Card)({
    width: isSmallScreen ? '100%' : 680,
    maxWidth: '100%',
  });

  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon key={index} color={index < rating ? 'primary' : 'disabled'} />
  ));

  return (
    <StyledCard>
      <CardContent>
        <Box display="flex" alignItems="flex-end" marginLeft={2}>
          <Box display="inline" alignItems="center" marginRight={5}>
            <Box display="flex" alignItems="center">
              <img src={icon} alt={label} style={{ width: 30, height: 30, marginBottom: 10 }} />
              <Typography variant="body1" fontWeight="fontWeightBold" marginLeft={1}>
                {label}
              </Typography>
            </Box>
            <Box display="flex">{stars}</Box>
          </Box>
          <Box display="flex">
            <Typography variant="body2" color="textSecondary" sx={{ whiteSpace: 'pre-wrap' }}>
              {comment}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

const Skills: React.FC = () => {
  const skills = [
    {
      label: 'JavaScript',
      icon: js_icon,
      rating: 4,
      comment: '前職のプロジェクトや個人開発で使用',
    },
    {
      label: 'Java',
      icon: java_icon,
      rating: 2,
      comment: '短い期間のプロジェクトだが実務経験あり\n職業訓練校にて学習',
    },
    {
      label: 'TypeScript',
      icon: ts_icon,
      rating: 4,
      comment: '独学で習得し、個人開発で使用\n基本的なことは理解しているが、実務経験はなし',
    },
    {
      label: 'Node.js',
      icon: nodejs_icon,
      rating: 3,
      comment: '独学で習得し、個人開発で使用\n基本的なことは理解しているが、実務経験はなし',
    },
    {
      label: 'Python',
      icon: python_icon,
      rating: 3,
      comment: '職業訓練校にて学習',
    },
    {
      label: 'React',
      icon: react_icon,
      rating: 2,
      comment: '本ポートフォリオサイトの作成にて学習・使用',
    },
    {
      label: 'AWS',
      icon: aws_icon,
      rating: 1,
      comment: '独学で習得し、個人開発にてLightSailを使用',
    },
  ];

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={2}>
          <Typography variant="h5" style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
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
