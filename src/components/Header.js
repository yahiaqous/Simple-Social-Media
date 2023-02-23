/** @format */

// Code from => https://mui.com/material-ui/react-app-bar/#responsive-app-bar-with-drawer

import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;
const pages = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Login',
    path: '/auth',
  },
];

export default function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Small Screens
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        SSM
      </Typography>

      <Divider />

      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* Large Screens */}
      <AppBar component='nav' sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>

          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            SSM
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map((page, key) => (
              <Link href={page.path} key={key}>
                <Button key={page.name} sx={{ color: 'white' }}>
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Small Screens */}
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
