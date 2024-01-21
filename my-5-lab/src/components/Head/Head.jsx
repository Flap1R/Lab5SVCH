import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { SimpleMenu } from '../SimpleMenu/SimpleMenu';
import { MenuBlockWithButton } from '../MenuBlockWithButton/MenuBlockWithButton';
import { CustomAvatar } from '../CustomAvatar/CustomAvatar';
import { Tooltip } from '@mui/material';
import './Head.css';

export function Head() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className='pageHead'>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Учет деятельности нотариальной конторы
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                head-label="account of current user"
                head-controls="menu-appbar"
                head-haspopup="true"
                onClick={handleOpenNavMenu}
                color="#1e5327"
              >
                <MenuIcon />
              </IconButton>
              <SimpleMenu anchorElNav={anchorElNav} handleCloseNavMenu={() => handleCloseNavMenu()} />
            </Box>
            <Typography
              style={{fontSize: "3vw"}}
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#1e5327',
                textDecoration: 'none',
              }}
            >
              Учет деятельности нотариальной конторы
            </Typography>
              
            <MenuBlockWithButton/>

            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <CustomAvatar/>
            </Tooltip>
            
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
