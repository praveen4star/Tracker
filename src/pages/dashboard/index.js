import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import OutlinedCard from './Cards';
import ResponsiveDialog from './Popup';
import { Grid } from '@mui/material';
import {Paper} from '@mui/material';
import jwtInterceoptor from '../../component/shared/jwtinterceptor';

const ContainerSecond = styled.div`

height: auto;
width:100%;
overflow-y: scroll;

`
const Container = styled.div`
margin-top:100px;
width:100%;
height: auto;
display: flex;
flex-direction: column;


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
  const[user,setUser]=useState({});

  useEffect(() => {
    jwtInterceoptor
      .get("http://localhost:9000/api/users/user")
      .then((response) => {
        console.log(response)
          setUser(response?.data);
          console.log(user.fName);
      });
  }, []);
 
  return (
    <Container>
        <Strip>
            <Text>Hello <MidText>{user.fName}</MidText></Text>
            <ResponsiveDialog/>  
        </Strip>
        <ContainerSecond>
          <Grid   container  spacing={1} style={
              { 
                
                display:'flex',
                alignItems:'center',
               
                paddingLeft: '28px',
              }
            }
           >
       
                <OutlinedCard/>
          </Grid>
        </ContainerSecond>
    </Container>

    
  )
}

export default Index
