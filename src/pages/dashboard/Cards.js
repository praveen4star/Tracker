import  React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import jwtInterceoptor from 'utils/jwtinterceptor';
import { Link } from 'react-router-dom';

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




const CardExample =(props)=>{
const{count,desc,planName}=props;
 return(
    <React.Fragment>
        <CardContent >
          <CardTop>
          <Icon><IconCircle>{count+1}</IconCircle></Icon>
          <Typography sx={{ fontSize: 18,fontWeight:'bold', padding:'10px', }} >
            {planName}
          </Typography>
          </CardTop> 
          <CardMiddle>
          <CircularStyle>
            <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={'13'} />
          </CircularStyle>
          <MiddleText>6/10</MiddleText>
          </CardMiddle>
          <CardBottom>
            <BottomText>{desc} </BottomText>
          </CardBottom>
        </CardContent>
    </React.Fragment>
  )
}

 const OutlinedCard= ()=> {
 const [opentask, setopentask] = useState(false);
  const[plans,setPlans]=useState([]);

 useEffect(() => {
  jwtInterceoptor
    .get("http://localhost:9000/api/plan")
    .then((response) => {
        setPlans(response?.data);
    });
}, []);

 
  return (
    <React.Fragment>
      {plans.map((elem, key)=>
            <Grid item key={key} xs={4} sx={{maxHeight : 250 , marginBottom:'5px'}} >
              <Box opentask={opentask} sx={{ minWidth: 200,maxWidth : 400, maxHeight : 250 }}>
                <Card variant="outlined"  style={{boxShadow: '2px 4px 10px 1px rgba(201,201,201,0.47)'}} onClick={setopentask} >
                 <Link to={`task${elem._id}`}>
                  <CardExample key={key} count={key} desc={elem.desc} planName={elem.plan_name}/>
                </Link>
                </Card>
              </Box>
            </Grid>
          
      )}

    </React.Fragment>
  );
}
export default OutlinedCard;