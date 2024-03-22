import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const StyledButton = styled(Button)(() => ({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline',
  },
}))

const Navbar: React.FC = () => {
  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <div style={{ marginLeft: 'auto' }}>
          <AnchorLink href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledButton>ABOUT</StyledButton>
          </AnchorLink>
          <AnchorLink href="#skills" style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledButton>SKILLS</StyledButton>
          </AnchorLink>
          <AnchorLink href="#works" style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledButton>Works</StyledButton>
          </AnchorLink>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
