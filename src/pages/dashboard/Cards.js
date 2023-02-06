import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  cardContainer:{
  boxShadow: '2px 4px 10px 1px rgba(201,201,201,0.47)',
  
  },
})


const percentage = 60;



const CardTop = styled.div`
display: flex;
align-items: center;


`;
const Icon = styled.div`

`;
const CircularStyle = styled.div`
margin: 10px;
width: 70px;
height: 70px;
font-size: 40px;
font-weight: bold;
`;
const CardMiddle = styled.div`
display: flex;
align-items: center;

`;
const MiddleText = styled.h1`
margin: 30px;

`;
const CardBottom = styled.div`

`;
const BottomText = styled.text`

`;
const IconCircle = styled.div`
margin-left: 10px;
height: 2rem;
width:2rem;
font-weight: bold;
color: white;
border: 0px solid black;
border-radius: 50%;
background-color: #3e98c7;
display: flex;
align-items: center;
justify-content: center;
`;




const card = (
  <React.Fragment>
    <CardContent >
      <CardTop>
       <Icon><IconCircle>2</IconCircle></Icon>
      <Typography sx={{ fontSize: 18,fontWeight:'bold', padding:'10px', }} >
        Development
      </Typography>
      </CardTop> 
      <CardMiddle>
      <CircularStyle>
        <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={'13'} />
      </CircularStyle>
      <MiddleText>6/10</MiddleText>
      </CardMiddle>
      <CardBottom>
        <BottomText>Mai bhi chahta hu kisi ka dhyaan rakhu aur mera bhi koi dhyaan rakhe lekin darr jata hu christine - Dr Strange <br/>Agar Alag hone ke darr se hum sath na reh sake toh ishme kiska fayda hai peter - Gwen </BottomText>
      </CardBottom>
        
    </CardContent>
    
  </React.Fragment>
);

 const OutlinedCard= ()=> {
 const [opentask, setopentask] = useState(false);

  const classes = useStyles();
  return (
    <Box opentask={opentask} sx={{ minWidth: 200 }}>
      <Card variant="outlined" className={classes.cardContainer} onClick={setopentask} >{card}</Card>
    </Box>
  );
}
export default OutlinedCard;