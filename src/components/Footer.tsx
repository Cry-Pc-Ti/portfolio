import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer: React.FC = () => {
  return (
    <>
      <Box bgcolor="GrayText" color="white" pt={2} pb={2} mt={3}>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Taito Imura. All rights reserved.
        </Typography>
        <Box display="flex" alignContent="center" justifyContent="center" mt={1}>
          <Typography variant="body2" align="center" mr={2}>
            red.snp.and@gmail.com
          </Typography>
          <Link href="https://github.com/Cry-Pc-Ti" target="_blank" rel="noopener noreferrer" color="inherit">
            <GitHubIcon sx={{ fontSize: 24, mr: 1 }} />
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default Footer
