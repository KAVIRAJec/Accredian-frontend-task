import * as React from 'react';
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
import { Link } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

function NavBar() {
    const { userData, logout } = useAuth();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const scrollToSection = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl" className='bg-white'>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'sans-serif',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: '#297ce9',
                            textDecoration: 'none',
                        }}
                    >
                        Accredian
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="#2a2e30"
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
                            <Link to='/refer'>
                                <MenuItem key="Refer & Earn"
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">Refer & Earn</Typography>
                                </MenuItem>
                            </Link>
                            <a href='#earnings' onClick={scrollToSection} className='scroll-smooth'>
                                <MenuItem key="My earnings"
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">My earnings</Typography>
                                </MenuItem>
                            </a>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'sans-serif',
                            fontWeight: 700,
                            color: '#297ce9',
                            textDecoration: 'none',
                        }}
                    >
                        Accredian
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to='/refer'>
                            <Button
                                key='Refer & Earn'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#424545', fontWeight: '800', display: 'block' }}
                            >
                                <Typography textTransform={'none'}>Refer & Earn</Typography>
                            </Button>
                        </Link>
                        <a href='#earnings' onClick={scrollToSection} className='scroll-smooth'>
                            <Button
                                key='My earnings'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#424545', fontWeight: '800', display: 'block' }}
                            >
                                <Typography textTransform={'none'}>My earnings</Typography>
                            </Button>
                        </a>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button variant="text">
                            <Typography textTransform={'none'} onClick={logout}>
                                {userData ? 'logout' : 'login'}
                            </Typography>
                        </Button>
                        <Button variant="contained">
                            <Link to='/refer'>
                                <Typography textTransform={'none'}>
                                    Try free
                                </Typography>
                            </Link>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;