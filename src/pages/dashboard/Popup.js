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


const Text = styled.h5`

`;


 const  ResponsiveDialog =()=> {
  
  const [open, setOpen] = React.useState(false);
  const [user,setUser] = useState({
    plan:"",desc:""
  });
  const [records , setRecords] = useState([]);

   const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value);

    setUser({...user, [name]:value })

   }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  const handleSubmit = (e)=>{
     e.preventDefault();
     const newRecord = {...user,id: new Date().getTime().toString()}
     console.log(records);
     setRecords([...records,newRecord]);
     console.log(records);

     setUser({plan:"",desc:""});
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
       name='plan'
       id="outlined-basic"
       variant="outlined"
       value={user.plan}
       onChange={handleInput}
       placeholder='Plan Name'/>

      <Text>Description</Text>
      <TextField
       name='desc'
       id="outlined-basic"
       variant="outlined"
       value={user.desc}
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