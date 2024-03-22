import React from 'react'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Zoom from '@mui/material/Zoom'
import { styled } from '@mui/material/styles'

const ScrollTopButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  borderRadius: '50%', // アイコンを丸くする
}))

const ScrollTop: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Zoom in={trigger}>
      <ScrollTopButton onClick={handleClick} aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </ScrollTopButton>
    </Zoom>
  )
}

export default ScrollTop
