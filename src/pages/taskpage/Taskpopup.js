import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'






const Text = styled.h5`

`;


 const  ResponsiveDialog =()=> {
  
  const [open, setOpen] = React.useState(false);

  const [selectedDate, setSelectedDate] = useState(null)
  

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = (save)=>{

  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Task
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        
      >
        <DialogTitle >
          {"Add Task Inside Your Plan"}
        </DialogTitle>
        <DialogContent>
        <Box
         component="form"
        sx={{
        '& > :not(style)': { m: 1, width: '40ch',},
          }}>

      <Text>Task Name</Text>
      <TextField id="outlined-basic"  variant="outlined" placeholder='Task Name' />
      <Text>Description</Text>
      <TextField id="outlined-basic"  variant="outlined" placeholder='Description'/> 
      <Text>Due Date</Text> 
      <DatePicker selected={selectedDate} onChange={date=>setSelectedDate(date)} />
      
      
      
      
     
          
   
    </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onSubmit={handleSave} onClick={handleSave} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ResponsiveDialog


