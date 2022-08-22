import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import BookmarkAddTwoToneIcon from '@mui/icons-material/BookmarkAddTwoTone';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ThemeSwitch from './ThemeSwitch';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import BookOnlineTwoToneIcon from '@mui/icons-material/BookOnlineTwoTone';
import { Avatar, Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'; 
import { AppContext } from '../context/AppContext';
import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';






const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function NavBar({children}) {
  const theme = useTheme();
  const {user} = React.useContext(AppContext);
  const [open, setOpen] = React.useState(false);

  const[anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <BookmarkAddTwoToneIcon/>
          </IconButton>
          <Box sx={{mr:3, flexGrow:1,...(open&&{display:'none'})}}>
            <Link to="/">
              <img alt="Book Store Logo" style={{maxHeight: '60px'}} className='p2' src="https://res.cloudinary.com/dsmlypwwo/image/upload/v1660704882/pngkey.com-books-png-84413_rkfybr.png"/>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

              {
                user?.icon?
                <Avatar alt={user.first_name}src={`https://avatars.dicebear.com/api/adventurer-neutral/${user.icon}.svg`} />
                :
                <Avatar alt="Please Login" src={`https://avatars.dicebear.com/api/adventurer-neutral/${new Date().getDay()}.svg`} />
              }
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user?
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to='/logout' style={{textDecoration: 'none', color:'black'}}>

                    <Typography textAlign="center">
                      Logout
                    </Typography>
                  </Link>

                </MenuItem>
              :
                <MenuItem onClick={handleCloseUserMenu}>
                <Link to='/login' style={{textDecoration: 'none', color:'black'}}>
                  <Typography textAlign="center">
                    Login
                  </Typography>
                </Link>
                </MenuItem>
              }
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Box sx={{color:"white", backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://res.cloudinary.com/dsmlypwwo/image/upload/v1660705147/bookshelf-gfd4d0047a_1280_qgsqtn.png')", backgroundSize:"contain", flexGrow: 1}}>
          <DrawerHeader>
            Paths to Enlightenment
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon sx={{color:'white'}}/> : <ChevronLeftIcon  sx={{color:'white'}}/>}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[{label:'Register', path:'/register', icon:<AppRegistrationOutlinedIcon sx={{color:'white'}}/>},
            {label:'Login', path:'/login', icon:<LoginIcon sx={{color:'white'}}/>},
            {label:'Create Book', path:'/create', icon:<AddBoxOutlinedIcon sx={{color:'white'}}/>},
            {label:'Book', path:'/book', icon:<BookOnlineTwoToneIcon  sx={{color:'white'}}/>},
            {label:'Browse', path:'/browse', icon:<ExploreOutlinedIcon sx={{color:'white'}}/>},
            {label:'Reading List', path:'/readinglist', icon:<LibraryBooksSharpIcon  sx={{color:'white'}}/>},                       
          ].map((navItem, index) => (
              <ListItem key={navItem.label} disablePadding sx={{ display: 'block', ml:2, mb:2 }}>
                <div style={{display:"flex", marginTop:"20px"}}>
                <Link to={navItem.path} style={{display:"flex", color: 'inherit', textDecoration: 'none'}}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {navItem.icon}
                  </ListItemIcon>
                  <ListItemText primary={navItem.label} sx={{ opacity: open ? 1 : 0 }} />
                </Link>
                </div>
              </ListItem>
            ))}
          </List>
        { open ?
          <ListItem sx={{position:"absolute", bottom:"0px", alignContent:"center", justifyContent:"center"}}>
              <ThemeSwitch/>
          </ListItem>
        : ''}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
       {children}

      </Box>
    </Box>
  );
}