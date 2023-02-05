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
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from 'assets/images/logo.png';
import { ThemeProvider, createTheme } from '@mui/material/styles';



const drawerWidth = 240;
const navItems = ['Home', 'About', 'Features','Contact'];

function DrawerAppBar(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const theme = createTheme({
    typography: {
      fontFamily: [
        'poppins',
      ].join(','),
    },
  });



const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
         <img src={logo} width="50px" height="60px"/>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
   
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" style={{ background: '#fff' }}>

         <Toolbar>

        
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } ,color:"black"}}
          >
            <MenuIcon />
          </IconButton>
          


          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}>
          <img src={logo} width="50px" height="60px"/>
          </Box>
          

          <ThemeProvider theme={theme}>
            <Box sx={{ display: { xs: 'none', sm: 'block'},mr:'50px'}}>
            { navItems.map((item) => (
              <Button key={item} sx={{ color: 'black' ,ml:'35px' ,fontWeight:'400',fontSize:'15px'}} >
                {item}
              </Button>
            )) }
              
            <Button  sx={{ color: 'white' ,ml:'35px',backgroundColor:'rgba(126, 28, 254, 1)',fontWeight:'400',fontSize:'15px'}}>
                 login
            </Button>
          </Box>
          </ThemeProvider>
        </Toolbar>

      </AppBar>

      
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    
     
    </Box>
  );
}


export default DrawerAppBar;
