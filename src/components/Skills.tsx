import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star'
import { Grid, useMediaQuery, useTheme } from '@mui/material'
import { skillsData } from '../static/data/skillsData'

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
    <>
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
    </>
  )
}

const Skills: React.FC = () => {
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
            {skillsData.map((skill, index) => (
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
