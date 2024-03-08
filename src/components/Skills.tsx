import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

// スタイルを定義
const StyledCard = styled(Card)({
  width: 730,
  maxWidth: '100%',
});

const Skills: React.FC = () => {
  return (
    <Box p={2}>
      <Box display="flex" justifyContent="center" p={1}>
        <Typography variant="h5">Skills</Typography>
      </Box>
      <Box display="flex" justifyContent="center" p={1}>
        <StyledCard>
          <CardContent>
            <Typography variant="h6">言語</Typography>
            <Typography color="textSecondary">JavaScript / TypeScript / Java / Python</Typography>
          </CardContent>
        </StyledCard>
      </Box>
      <Box display="flex" justifyContent="center" p={1}>
        <StyledCard>
          <CardContent>
            <Typography variant="h6">フレームワーク</Typography>
            <Typography color="textSecondary">Ruby on Rails / Sinatra / Laravel / React</Typography>
          </CardContent>
        </StyledCard>
      </Box>
      {/* <Box display="flex" justifyContent="center" p={1}>
        <StyledCard>
          <CardContent>
            <Typography variant="h6">データベース</Typography>
            <Typography color="textSecondary">MySQL / PostgreSQL</Typography>
          </CardContent>
        </StyledCard>
      </Box>
      <Box display="flex" justifyContent="center" p={1}>
        <StyledCard>
          <CardContent>
            <Typography variant="h6">AWS</Typography>
            <Typography color="textSecondary">
              EC2 / ECS / ECR / Lambda / SQS / SNS / Elastic Beanstalk / S3 / Cloud9 / CloudWatch /
              CloudFormation / RDS / Route53
            </Typography>
          </CardContent>
        </StyledCard>
      </Box> */}
    </Box>
  );
};

export default Skills;
