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
  const currentuser = { isAdmin: false, isHR: false }
  console.log('*****************',Object.keys(currentuser).length)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
              {Object.keys(currentuser).length == 0 ?
                (
                  <>
                    <MenuItem key={'Login'} onClick={() => {
                      handleCloseNavMenu();
                      navigate("/login");

                    }}>
                      <Typography textAlign="center">Login</Typography>
                    </MenuItem>
                    <MenuItem key={'Sign-up'} onClick={() => {
                      handleCloseNavMenu();
                      navigate("/signup");
                    }}>
                      <Typography textAlign="center">Sign-up</Typography>
                    </MenuItem>
                  </>
                )
                :
                currentuser.isHR ?
                  (<>
                    <MenuItem key={'Accepted'} onClick={() => {
                      handleCloseNavMenu();
                      navigate("/accepted");
                    }}>
                      <Typography textAlign="center">Accepted</Typography>
                    </MenuItem>
                    <MenuItem key={'JobsHiring'} onClick={() => {
                      handleCloseNavMenu();
                      navigate("/jobshiring");
                    }}>
                      <Typography textAlign="center">Jobs Hiring</Typography>
                    </MenuItem>
                    <MenuItem key={'Profile'} onClick={() => {
                      handleCloseNavMenu();
                      navigate("/profile");
                    }}>
                      <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                    <MenuItem key={'Logout'} onClick={() => {
                      handleLogout();
                    }}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </>) :
                  (<>
                    <MenuItem key={'Jobs'} onClick={() => {
                      handleCloseNavMenu();
                      navigate("/jobs");
                    }}>
                      <Typography textAlign="center">Jobs</Typography>
                    </MenuItem>
                    <MenuItem key={'JobsApplied'} onClick={() => {
                      handleCloseNavMenu();
                      navigate("/jobsapplied");
                    }}>
                      <Typography textAlign="center">Jobs Applied</Typography>
                    </MenuItem>
                    <MenuItem key={'Profile'} onClick={() => {
                      handleCloseNavMenu();
                      navigate("/profile");
                    }}>
                      <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                    <MenuItem key={'Logout'} onClick={() => {
                      handleLogout();
                    }}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </>)
              }
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

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', marginRight: '40px' }}>
            {Object.keys(currentuser).length == 0 
              ?
              (<>
                <Button
                  key={'Login'}
                  onClick={() => {
                    navigate("/login");
                  }}

                  sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, marginLeft: '10px', marginRight: '10px' }}
                >
                  Login
                </Button>
                <Button
                  key={'Register'}
                  onClick={() => {
                    navigate("/register");
                  }}
                  sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, marginLeft: '10px', marginRight: '10px' }}
                >
                  Sign-up
                </Button>
              </>) :
              currentuser.isHR
                ?
                (<>

                  <Button
                    key={'accepted'}
                    onClick={() => {
                      navigate("/accepted");
                    }}
                    sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, marginLeft: '10px', marginRight: '10px' }}
                  >
                    Accepted
                  </Button>
                  <Button
                    key={'jobshiring'}
                    onClick={() => {
                      navigate("/jobshiring");
                    }}
                    sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, marginLeft: '10px', marginRight: '10px' }}
                  >
                    Jobs Hiring
                  </Button>
                  <Button
                    key={'profile'}
                    onClick={() => {
                      navigate("/profile");
                    }}
                    sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, marginLeft: '10px', marginRight: '10px' }}
                  >
                    Profile
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
                </>) :
                (<>

                  <Button
                    key={'jobs'}
                    onClick={() => {
                      navigate("/jobs");
                    }}
                    sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, marginLeft: '10px', marginRight: '10px' }}
                  >
                    Jobs
                  </Button>
                  <Button
                    key={'jobsapplied'}
                    onClick={() => {
                      navigate("/jobsapplied");
                    }}
                    sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, marginLeft: '10px', marginRight: '10px' }}
                  >
                    Jobs Applied
                  </Button>
                  <Button
                    key={'profile'}
                    onClick={() => {
                      navigate("/profile");
                    }}
                    sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, marginLeft: '10px', marginRight: '10px' }}
                  >
                    Profile
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
                </>)}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;