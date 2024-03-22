import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star'
import { Grid, useMediaQuery, useTheme } from '@mui/material'
import { languageData } from '../static/languageData'

interface SkillItemProps {
  label: string
  icon: string
  rating: number
  comment: string
}

const SkillItem: React.FC<SkillItemProps> = ({ label, icon, rating, comment }) => {
  const isSmallScreen = useMediaQuery(useTheme().breakpoints.down('sm'))

  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon key={index} color={index < rating ? 'primary' : 'disabled'} />
  ))

  return (
    <Card sx={{ width: isSmallScreen ? '88vw' : 'auto', maxWidth: '100%' }}>
      <CardContent>
        <Box display="flex" alignItems="center" m={1}>
          <Box display="inline" pr={5}>
            <Box display="flex" alignItems="center">
              <img src={icon} alt={label} style={{ width: 30, height: 30 }} />
              <Typography variant="body1" fontWeight="fontWeightBold" pl={1}>
                {label}
              </Typography>
            </Box>
            <Box display="flex" pt={1}>
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
  )
}

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
      label: 'Node.js',
      icon: languageData.find((l) => l.name === 'Node.js')?.icon ?? '',
      rating: 3,
      comment: '独学で習得し、個人開発で使用\n基本的なことは理解しているが、実務経験はなし',
    },
    {
      label: 'AWS',
      icon: languageData.find((l) => l.name === 'AWS')?.icon ?? '',
      rating: 1,
      comment: '独学で習得し、個人開発にてLightSailを使用',
    },
    {
      label: 'GitHub',
      icon: languageData.find((l) => l.name === 'GitHub')?.icon ?? '',
      rating: 2,
      comment: '個人開発で使用',
    },
  ]

  return (
    <>
      <Box p={2} pb={9}>
        <Box display="flex" justifyContent="center" pb={3}>
          <Typography variant="h5" style={{ fontWeight: 'bold' }}>
            Skills
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Grid container spacing={2} justifyContent="flex-start" style={{ maxWidth: '1080px' }}>
            {skills.map((skill, index) => (
              <Grid item key={index} sm={12} lg={6}>
                <SkillItem icon={skill.icon} label={skill.label} rating={skill.rating} comment={skill.comment} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Skills
