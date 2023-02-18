import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import jwtInterceoptor from '../../component/shared/jwtinterceptor';


const Text = styled.h5`

`;


 const  ResponsiveDialog =()=> {
  
  const [open, setOpen] = React.useState(false);

  const [plan,setPlan] = useState({
    planName:"",desc:""
  });
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

   const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
     setPlan({...plan, [name]:value })
   }

      const{planName,desc}=plan;
      const payload={
        "plan_name" : planName,
        "desc":desc
      }

   const handleSubmit = async(e)=>{
     e.preventDefault();
     try{
     const response= await  jwtInterceoptor
     .post("http://localhost:9000/api/plan",payload);
    setPlan({plan:"",desc:""});
    }
    catch(err){
      console.log(err);
    }
    
   }
  
  
return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Plan
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        
      >
        <DialogTitle >
          {"Planning"}
        </DialogTitle>
    <DialogContent>
      <Box
         component="form" onSubmit={handleSubmit} 
        sx={{
        '& > :not(style)': { m: 1, width: '40ch',},
          }}>

      <Text>Plan Name</Text>
      <TextField
       name='planName'
       id="outlined-basic"
       variant="outlined"
       value={plan.plan}
       onChange={handleInput}
       placeholder='Plan Name'/>

      <Text>Description</Text>
      <TextField
       name='desc'
       id="outlined-basic"
       variant="outlined"
       value={plan.desc}
       onChange={handleInput}
       placeholder='Description'/>      
    <Stack spacing={2} direction="row">
      <Button style={{ padding: "12px 79px", margin:'15px 0px' }} variant="contained">Add Task Inside Your Plan</Button>
    </Stack>
    <DialogActions type='submit'>
                <Button autoFocus onClick={handleClose}>
                  Cancel
                </Button>
                <Button type='submit' autoFocus>
                  Save
                </Button>
              </DialogActions>
      </Box  >
     </DialogContent>        
    </Dialog>
    </div>
  );
}
export default ResponsiveDialog