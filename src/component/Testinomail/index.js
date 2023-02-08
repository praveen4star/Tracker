import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import testinomial1 from  'assets/images/testinomail1.png';
import testinomial2 from  'assets/images/testinomail2.png';
import testinomial3 from  'assets/images/testinomial3.png';
import quotation from 'assets/images/quotation.png';
import {Box, Grid ,Typography} from "@mui/material";

 const MediaCard=()=> {
    // const classes=useStyles();
    return (
     <Box sx={{mb:"100px",mt:"100px"}}>
        <Typography variant="h3" sx={{textAlign:"center",mb:"100px"}}>Testimonial</Typography>
        <Grid container  spacing={9} >
            
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ width:"281px",height:"268px",borderRadius:"16px",overflow:"visible",
            backgroundColor:"rgba(199, 172, 172, 0.50)"}}>
                <CardMedia
                 sx={{width:"65px",height:"39px",ml:"auto",mr:"auto"}}
                    component="img"
                    image={quotation}
                    alt="imgae"
                />

                <CardContent sx={{mt:"10px"}}>
                    <Typography gutterBottom variant="h5" component="div">
                    Avenya
                    </Typography>
                    <Typography variant="p">
                    The finished content is delivered and you can make corrections that
                   we will effect to satisfy your requirements.
                    </Typography>
                </CardContent>
                
                <CardMedia
                    component="img"
                   sx={{width:"85px",height:"134",ml:"auto",mr:"auto",position:"relative",top:"20px"}}
                    image={testinomial1}
                    alt="imgae"
                />
            </Card>
        </Grid>
      

        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ width:"281px",height:"268px",borderRadius:"16px",overflow:"visible",
            backgroundColor:"rgb(84 90 185 / 22%)"}}>
                <CardMedia
                 sx={{width:"65px",height:"39px",ml:"auto",mr:"auto"}}
                    component="img"
                    image={quotation}
                    alt="imgae"
                />

                <CardContent sx={{mt:"10px"}}>
                    <Typography gutterBottom variant="h5" component="div">
                    Avenya
                    </Typography>
                    <Typography variant="body1"  >
                    The finished content is delivered and you can make corrections that
                   we will effect to satisfy your requirements.
                    </Typography>
                </CardContent>
                
                <CardMedia
                    component="img"
                   sx={{width:"85px",height:"134",ml:"auto",mr:"auto",position:"relative",top:"20px"}}
                    image={testinomial2}
                    alt="imgae"
                />
            </Card>
        </Grid>
            
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ width:"281px",height:"268px",borderRadius:"16px",overflow:"visible",
        backgroundColor:"rgba(45, 198, 219, 0.12)"}}>
                <CardMedia
                    sx={{width:"65px",height:"39px",ml:"auto",mr:"auto"}}
                    component="img"
                    image={quotation}
                    alt="imgae"
                />

                <CardContent sx={{mt:"10px"}}>
                    <Typography gutterBottom variant="h5" component="div">
                    Avenya
                    </Typography>
                    <Typography variant="p"  >
                    The finished content is delivered and you can make corrections that
                   we will effect to satisfy your requirements.
                    </Typography>
                </CardContent>
                
                <CardMedia
                    component="img"
                   sx={{width:"85px",height:"134",ml:"auto",mr:"auto",position:"relative",top:"20px"}}
                    image={testinomial3}
                    alt="imgae"
                />
            </Card>
         </Grid>

         <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ width:"281px",height:"268px",borderRadius:"16px",overflow:"visible",
        backgroundColor:"rgba(126, 28, 254, 0.1)"}}>
                <CardMedia
                 sx={{width:"65px",height:"39px",ml:"auto",mr:"auto"}}
                    component="img"
                    image={quotation}
                    alt="imgae"
                />

                <CardContent sx={{mt:"10px"}}>
                    <Typography gutterBottom variant="h5" component="div">
                    Avenya
                    </Typography>
                    <Typography variant="p"  >
                    The finished content is delivered and you can make corrections that
                   we will effect to satisfy your requirements.
                    </Typography>
                </CardContent>
                
                <CardMedia
                    component="img"
                   sx={{width:"85px",height:"134",ml:"auto",mr:"auto",position:"relative",top:"20px"}}
                    image={testinomial3}
                    alt="imgae"
                />
           </Card>
        </Grid>


        </Grid>
     </Box>
    
  );
}

export default  MediaCard;