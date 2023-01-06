/* eslint-disable @next/next/no-img-element */
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from 'next/link';
import * as React from 'react';

interface Props {
  window?: () => Window;
  children?: any;
  isMobile?: boolean;
}

const drawerWidth = 240;
const navItems = [
  { title: 'Home', url: '/' },
  { title: 'Nosotros', url: '/about' },
  { title: 'Clientes', url: '/customers' },
  { title: 'Contactanos', url: '/contact' },
];

export default function Navbar(props: Props) {
  const { window, isMobile } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const HideOnScroll = (props: Props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <Link key={item.url} href={`${item.url}`}>
            <ListItem key={item.title} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <HideOnScroll>
        <AppBar
          component="nav"
          sx={{
            background: '#131415',
            backgroundOpaque: 'rgba(19,20,21,.7)',
            backgroundHighlight: ' #2c2c30',
            backgroundHighlightHighlight: '#393941',
            backgroundHighlightTransparent: 'rgba(66,66,66,.7)',
            backgroundButton: '#1f2124',
            backdropFilter: ' blur(62px)',
          }}
        >
          <Toolbar>
            <Link href="/">
              <img
                src="/logo.png"
                alt="logoDesktop"
                width={35}
                height={35}
                style={{ marginLeft: isMobile ? '0px' : '20px' }}
              />
            </Link>

            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: {
                  sm: 'block',
                  marginLeft: '20px',
                },
              }}
            >
              Viva
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Link key={item.title} href={`${item.url}`}>
                  <Button sx={{ color: '#fff',  }}>{item.title}</Button>
                </Link>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
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
              background: '#131415',
              backgroundOpaque: 'rgba(19,20,21,.7)',
              backgroundHighlight: ' #2c2c30',
              backgroundHighlightHighlight: '#393941',
              backgroundHighlightTransparent: 'rgba(66,66,66,.7)',
              backgroundButton: '#1f2124',
              backdropFilter: ' blur(62px)',
              color: 'white',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
