import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Divider, Typography, useMediaQuery, useTheme } from '@mui/material'
import NotionMasterBotDetail from './works/NotionMasterBot'
import WingmanBotDetail from './works/WingmanBot'
import PortfolioDetail from './works/Portfolio'

interface WorkDetailProps {
  open: boolean
  onClose: () => void
  title: string
  description: string
  repositoryName: string
  icon: string
}

const WorkDetail: React.FC<WorkDetailProps> = ({ open, onClose, title, description, repositoryName, icon }) => {
  const isSmallScreen = useMediaQuery(useTheme().breakpoints.down('sm'))

  const renderDetailPage = () => {
    switch (title) {
      case 'Notion Master Bot':
        return <NotionMasterBotDetail />
      case 'ウィングマンくん':
        return <WingmanBotDetail />
      case 'Portfolio':
        return <PortfolioDetail />
      default:
        return null
    }
  }

  let titleBar = <></>

  if (!isSmallScreen) {
    titleBar = (
      <>
        <Box display="flex" alignItems="center" justifyContent="space-between" ml={10}>
          <Box display="flex">
            <img src={icon} alt={title} style={{ marginRight: '10px', width: '30px', height: '30px' }} />
            <Box display="flex" alignItems="baseline" pr={2}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }} mr={1}>
                {title}
              </Typography>
              <Typography variant="subtitle2" paddingLeft={1} sx={{ fontWeight: 'lighter' }}>
                {`- ${description}`}
              </Typography>
            </Box>
          </Box>
          <IconButton
            href={`https://github.com/Cry-Pc-Ti/${repositoryName}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </>
    )
  } else {
    titleBar = (
      <>
        <Box display="flex" alignItems="center">
          <img src={icon} alt={title} style={{ marginRight: '10px', width: '30px', height: '30px' }} />
          <Box display="block" justifyContent="flex-start">
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'lighter' }}>
              {description}
            </Typography>
          </Box>
        </Box>
      </>
    )
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="lg"
        sx={{
          '& .MuiDialog-paper': isSmallScreen ? { width: '100%', height: '100%' } : { width: '85%', height: '85%' },
        }}
      >
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <IconButton aria-label="close" onClick={onClose} sx={{ position: 'absolute', right: '30px', top: '10px' }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
            {titleBar}
          </Box>
          <Divider sx={{ mt: isSmallScreen ? 1 : 2, mb: isSmallScreen ? 1 : 2 }} />
          <Box
            sx={{
              mt: isSmallScreen ? 2 : 3,
              ml: isSmallScreen ? 0 : 15,
              mr: isSmallScreen ? 0 : 15,
              mb: isSmallScreen ? 2 : 3,
            }}
          >
            {renderDetailPage()}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default WorkDetail
