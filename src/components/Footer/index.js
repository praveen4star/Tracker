import React from 'react';
import { Paper, Box, Grid ,Link,Typography} from "@mui/material";
import Logo from 'assets/Images/logo.png';
import insta from 'assets/Images/instagram.png';
import youtube from 'assets/Images/youtube.png';
import facebook from 'assets/Images/facebook.png';
import twitter from 'assets/Images/twitter.png';
import linkedin from 'assets/Images/linkedin.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    footer:{
     fontFamily:'poppins',
     fontSize:'20px'
     },
    
    Upperfooter: {
      backgroundColor:"rgba(217, 217, 217, 1)",
      textAlign: 'center',
    },

    gridStyle:{
        textAlign: 'center',
    },

    lowerfooter:{
        height:"50px",
        height : '20%',
        backgroundColor:"rgba(0, 0, 0, 0.49)",
        textAlign:"center"
    }
  });
  
const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.footer}>
       
        <Box  className={classes.Upperfooter}>
          <Grid container spacing={1} className={classes.gridStyle}>
              <Grid item  xs={12} sm={12} md={2}  lg={3}>
                    <Box>
                    <img src={Logo} alt="logo" loading='lazy' style={{height : '3.2rem'}}></img>
                    </Box>
                    <Box>
                     <Typography variant="h6">
                     Consistency gives sense
                     of accoutability that
                      translate to progress.
                     </Typography> 
                    </Box>
              </Grid>

             <Grid item xs={6} sm={8} md={4} lg={4}>
                <Typography variant="h6" sx={{mt:"10px"}}>Useful Links</Typography> 
                <Box sx={{pt:"5px"}}>
                 <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>Home</Link>
                </Box>
                <Box sx={{pt:"10px"}}>
                 <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>About</Link>
                </Box>
                <Box sx={{pt:"10px"}}>
                 <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>Contact</Link>
                </Box>
                <Box sx={{pt:"10px",mb:"30px"}}>
                 <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>Features</Link>
                </Box>
              </Grid>



                <Grid item xs={6} sm={8} md={4} lg={4} >
                <Typography variant="h6" sx={{mt:"10px"}}>Follow</Typography> 
                    <Box sx={{mt:"10px"}}>
                    <img style={{width:46,height:30}} src={facebook} alt="facebook logo "/> 
                    <img style={{width:46,height:30}} src={twitter} alt="twitter"/>
                    <img style={{width:46,height:30}} src={insta} alt="insta" /> 
                    <img style={{width:46,height:30}} src={linkedin} alt="linkedin" />
                    <img style={{width:46,height:30}} src={youtube} alt="youtube" />
                    </Box> 
                 </Grid>
            
              </Grid>
        </Box>

        <Box className={classes.lowerfooter}>
               <Typography variant="h5">
               Copyright © 2022 Task Exhibitor
               </Typography> 
        </Box>
        </Box>
    )
}

export default Footer;