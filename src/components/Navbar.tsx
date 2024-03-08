import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar: React.FC = () => {
  return (
    <AppBar color="default" position="static" style={{ alignItems: 'flex-end' }}>
      <Toolbar>
        <AnchorLink href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button color="inherit">ABOUT</Button>
        </AnchorLink>
        <AnchorLink href="#skills" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button color="inherit">SKILLS</Button>
        </AnchorLink>
        <AnchorLink href="#works" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button color="inherit">Works</Button>
        </AnchorLink>
        <AnchorLink href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button color="inherit">CONTACT</Button>
        </AnchorLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
