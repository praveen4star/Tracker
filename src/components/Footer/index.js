import React from 'react'
import { Paper, Box, Grid ,Link,Typography} from "@mui/material"
import Logo from 'assets/Images/logo.png';
import insta from 'assets/Images/instagram.png';
import youtube from 'assets/Images/youtube.png';
import facebook from 'assets/Images/facebook.png';
import twitter from 'assets/Images/twitter.png';
import linkedin from 'assets/Images/linkedin.png';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
    
        backgroundColor : "red"
      }
    
  });
  

const boxStyle = {
    width: '100%',
    height : '30%',
      mt:'180px'
}

const paperStyle = {
    width: '100%',
    height : '100%',
    backgroundColor : 'red'
}

const gridStyle = {
    height: '100%',
    width:'100%',
    textAlign: 'center',
    alignItems : 'center'
}

const Footer = () => {
    const classes = useStyles();
    return (
        <Box sx={boxStyle}  className={classes.root}>
            <Paper sx={paperStyle}  elevation={3} >
                <Grid container spacing={1} sx={gridStyle}>
                  
                   <Grid item  xs={12} sm={12} md={4}  lg={4}>
                    <Box>
                    <img src={Logo} alt="logo" loading='lazy' style={{height : '3.2rem'}}></img>
                    </Box>
                    <Box>
                        <Typography variant="h6">
                    Consistency gives sense
                    of accoutability that translate to progress.
                    </Typography> 
                    </Box>
                    </Grid>

                <Grid item xs={6} sm={8} md={4} lg={4}>
                <Box>Useful Links</Box> 
                    <Box>
                 <Link href="/" color="inherit">Home</Link>
                    </Box>
                   <Box>
                 <Link href="/" color="inherit">About</Link>
                    </Box>
                    <Box>
                 <Link href="/" color="inherit">Contact</Link>
                    </Box>
                    <Box>
                 <Link href="/" color="inherit">Features</Link>
                </Box>
                </Grid>



                <Grid item xs={6} sm={8} md={4} lg={4}>
                     <Box>Follow</Box> 
                    <Box>
                    <img  src={facebook} alt="facebook logo "/> 
                    <img style={{width:46,height:30}} src={twitter} alt="twitter"/>
                    <img style={{width:46,height:30}} src={insta} alt="insta" /> 
                    <img style={{width:46,height:30}} src={linkedin} alt="linkedin" />
                    <img style={{width:46,height:30}} src={youtube} alt="youtube" />
                    </Box> 
                 </Grid>
            
            </Grid>
            </Paper>
        </Box>
    )
}

export default Footer;