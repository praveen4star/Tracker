import React from 'react';
import {  Box, Grid ,Typography} from "@mui/material";
import about1 from 'assets/images/about1.png';
import about2 from 'assets/images/about2.png';



const About=()=>{

    return(
        <Box>
             <Box  >
                <Grid container spacing={10} >    
                    <Grid item  xs={12} sm={12} md={6}  lg={6}>
                        <Box>
                            <img src={about1} alt="About"  className="about-first" loading='lazy' style={{width:"100%"}}></img>
                        </Box>
                    </Grid>

                    <Grid item  xs={12} sm={12} md={5}  lg={4} sx={{AlignItem:"center",mt:"auto",mb:"auto"}}>
                        <Box>
                            <Typography variant="h6">
                            Add task,manage workflow and track progress to deliver objective on time.
                            Consistency is key to success we help you to become more  consistent 
                            by providing you continous feedback on your progress. 
                            </Typography> 
                        </Box>
                    </Grid>

                </Grid>
           </Box> 
            
           <Box>
                <Grid  container direction='row-reverse' spacing={10} >  
                    
                    <Grid item  xs={12} sm={12} md={6}  lg={6}>
                        <Box>
                            <img src={about2} alt="About" loading='lazy' style={{width:"100%"}}></img>
                        </Box>
                    </Grid>

                    <Grid item  xs={12} sm={12} md={5}  lg={4} sx={{AlignItem:"center",mt:"auto",mb:"auto"}}>
                        <Box>
                            <Typography variant="h6">
                            Add task,manage workflow and track progress to deliver objective on time.
                            Consistency is key to success we help you to become more  consistent 
                            by providing you continous feedback on your progress. 
                            </Typography> 
                        </Box>
                    </Grid>  
                
                </Grid>
           </Box> 

        
        </Box>
   
    )
}

export default About;