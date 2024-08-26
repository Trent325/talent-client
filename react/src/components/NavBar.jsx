import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = async () => {
    await doSignOut();
  } 

  return (
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
            ADP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem key={'Login'} onClick={() => {
                    handleCloseNavMenu();
                    navigate("/");
                    
                }}>
                    <Typography textAlign="center">Login</Typography>
                </MenuItem>
                <MenuItem key={'Sign-up'} onClick={() => {
                    handleCloseNavMenu();
                    navigate("/signup");
                }}>
                    <Typography textAlign="center">Sign-up</Typography>
                </MenuItem>
                <MenuItem key={'Events'} onClick={() => {
                    handleCloseNavMenu();
                    navigate("/events");
                }}>
                    <Typography textAlign="center">Events</Typography>
                </MenuItem>
                <MenuItem key={'About Us'} onClick={() => {
                    handleCloseNavMenu();
                    navigate("/About Us");
                }}>
                    <Typography textAlign="center">About Us</Typography>
                </MenuItem>
                <MenuItem key={'Logout'} onClick={() => {
                    handleLogout();
                }}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>

          <Typography
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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ADP
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', marginRight: '40px'}}>
            <Button
                key={'Login'}
                onClick={() => {
                    navigate("/");
                }}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, marginLeft: '10px', marginRight: '10px' }}
            >
                Login
            </Button>
            <Button
                key={'Sign-up'}
                onClick={() => {
                    navigate("/signup");
                }}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, marginLeft: '10px', marginRight: '10px' }}
            >
                Sign-up
            </Button>
            <Button
                key={'Events'}
                onClick={() => {
                    navigate("/events");
                }}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, marginLeft: '10px', marginRight: '10px' }}
            >
                Events
            </Button>
            <Button
                key={'About Us'}
                onClick={() => {
                    navigate("/events");
                }}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, marginLeft: '10px', marginRight: '10px' }}
            >
                About Us
            </Button>
            <Button
                key={'Logout'}
                onClick={() => {
                  handleLogout();
                }}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, marginLeft: '10px', marginRight: '10px' }}
            >
                Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;