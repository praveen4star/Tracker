import * as React from 'react';
import AppBar from '@mui/material/AppBar'; 
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import pagesData from "config/pages";
import logo from "assets/images/logo.png"
import profile1 from "assets/images/profile1.png";
import Navbar from '../navBar';
import {Outlet} from 'react-router-dom';

const drawerWidth = 230;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List className="logo" sx={{textAlign:"center"}}>      
      <img src={logo} style={{width:"96px",height:"115px"}} alt="logo of the company" />
     </List>
     <Divider />
     <List className="profile" sx={{textAlign:"center"}}>
     <img src={profile1} style={{width:"100px",height:"100px"}} alt="logo of the company" />
      </List>
      <Divider />
      <List>
        {pagesData.map((data, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={data.path}>
              <Box sx={{ml:"20px"}} className="nav_icon" >{data.icon}</Box>
              <ListItemText  sx={{ml:"20px",fontSize:"25px"}} primary={data.name} />
            </ListItemButton>
           </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height:"70px"
        }}
      >
        <Toolbar>
          <IconButton
            color="white"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
         
         </Toolbar>
         <Navbar /> 
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
    </Box>
  );
}



export default ResponsiveDrawer;
