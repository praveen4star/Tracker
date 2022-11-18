import React from 'react';
import { Paper, Box, Grid } from "@mui/material";
import Logo from 'assets/Images/logo.png';


const boxStyle = {
    width: '100%',
    height : '4rem'
}

const paperStyle = {
    width: '100%',
    height : '100%'
}

const gridStyle = {
    height: '100%',
    // width: '100%',
    textAlign: 'center',
    alignItems : 'center'
}

const Navbar = () => {
    return (
        <Box sx={boxStyle}>
            <Paper sx={paperStyle} elevation={3} >
                <Grid container spacing={1} sx={gridStyle}>
                    <Grid item xs={2} md={2} ><img src={Logo} alt="logo" loading='lazy' style={{height : '3.2rem'}}></img> </Grid>
                    <Grid item xs={2} md={2}> Home </Grid>
                    <Grid item xs={2} md={2}> About </Grid>
                    <Grid item xs={2} md={2}> Features </Grid>
                    <Grid item xs={2} md={2}> Contacts </Grid>
                    <Grid item xs={2} md={2}> Login Button </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

export default Navbar;