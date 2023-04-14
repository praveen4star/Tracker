import React from 'react';
import { Box, Grid ,Link,Typography} from "@mui/material";
import Logo from 'assets/images/logo.png';
import insta from 'assets/images/instagram.png';
import youtube from 'assets/images/youtube.png';
import facebook from 'assets/images/facebook.png';
import twitter from 'assets/images/twitter.png';
import linkedin from 'assets/images/linkedin.png';



   

  const  gridStyle={
        textAlign: 'center',
    }

 const lowerfooter={
        height:"30px",
        backgroundColor:"rgba(0, 0, 0, 0.49)",
        textAlign:"center"
    }

  
const Footer = () => {
  const footer={
    fontFamily:'poppins',
    fontSize:'20px'
    }
   
  const Upperfooter={
     backgroundColor:"rgba(217, 217, 217, 1)",
     textAlign: 'center',
   } 

    return (
        <Box style={footer}>
         <Box style={Upperfooter}>
          <Grid container spacing={1} style={gridStyle}>
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

        <Box style={lowerfooter}>
               <Typography variant="h5">
               Copyright © 2022 Task Exhibitor
               </Typography> 
        </Box>
        </Box>
    )
}

export default Footer;