import React from 'react'
import styled from 'styled-components'
import OutlinedCard from './Cards';
import ResponsiveDialog from './Popup';
import { Grid } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import {Paper} from '@mui/material';




// const useStyles = makeStyles({
//   gridContainer:{
//     height:'100vh',
//     width:'100%',
//     display:'flex',
//     alignItems:'center',
//     justifyContent:'center',
//     paddingLeft: '32px',
//     overflowY:'scroll',
//     scrollBehavior:'smooth',
//    }
  
// });


const ContainerSecond = styled.div`
height: auto;
overflow-y: scroll;

`


const Container = styled.div`
margin-top:100px;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;
const Strip = styled.div`
margin: 1rem;
padding: 1rem;
width: 96%;
border: 0px solid grey;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: space-between;
-webkit-box-shadow:2px 4px 10px 1px rgba(0,0,0,0.47);
box-shadow: 2px 4px 10px 1px rgba(201,201,201,0.47);
`;
const Text = styled.h1`

`;
const MidText = styled.span`
color: blue;
`;







const Index = () => {
  // const classes = useStyles();
  return (
    
    
    <Container>
        <Strip>
            <Text>Hello <MidText>Avenya</MidText></Text>
            <ResponsiveDialog/>  
        </Strip>
        <ContainerSecond>
          <Grid   container pacing={4} style={
              {
                height:'100vh',
                width:'100%',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                paddingLeft: '28px',
                overflowY:'scroll',
                scrollBehavior:'smooth',
              }
            }
            xs={{ height: '100vh' }}  >
         
         
          <Grid item xs={12} sm={6} md={4}>
          <Paper style={{margin:"10px"}}><OutlinedCard/></Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Paper style={{margin:"10px"}}><OutlinedCard/></Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Paper style={{margin:"10px"}}><OutlinedCard/></Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Paper style={{margin:"10px"}}><OutlinedCard/></Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Paper style={{margin:"10px"}}><OutlinedCard/></Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Paper style={{margin:"10px"}}><OutlinedCard/></Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Paper style={{margin:"10px"}}><OutlinedCard/></Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Paper><OutlinedCard/></Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Paper style={{margin:"10px"}}><OutlinedCard/></Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Paper style={{margin:"10px"}}><OutlinedCard/></Paper>
          </Grid>
        </Grid>
        </ContainerSecond>
    </Container>

    
  )
}

export default Index
