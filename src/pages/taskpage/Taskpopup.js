import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import jwtInterceoptor from '../../component/shared/jwtinterceptor';






const Text = styled.h5`

`;


 const  ResponsiveDialog =()=> {
  let {id}=useParams();
  
  const [open, setOpen] = React.useState(false);

  const [task,setTask] = useState({ "plan_id" :"",
  "task_name" :"",
  "date" : "",
  "timing" : "",
  "is_daily_task" : false
});

  const handleInput=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value);
     setTask({...task, [name]:value })
  }

  

const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const{TaskName,date,timing}=task;

 let payload={
  "plan_id" : id,
  "task_name" :TaskName,
  "date" : date,
  "timing" :timing,
  "is_daily_task" : false
  }


  const handleSave = async(e)=>{
    e.preventDefault();
    console.log(payload);
    try{
    const response= await  jwtInterceoptor
    .post("http://localhost:9000/api/task",payload);
    console.log(response);
     setTask({ "plan_id" :"",
  "task_name" :"",
  "date" : "",
  "timing" : "",
  "is_daily_task" : false
});
     handleClose();
   }
   catch(err){
     console.log(err);
   }
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
      <TextField  id="outlined-basic" name='TaskName' value={task.TaskName}
       onChange={handleInput} variant="outlined" 
       placeholder='Task Name' />

      {/* <Text>Description</Text>
      <TextField id="outlined-basic" value={task.date}
       onChange={handleInput} name='Description' variant="outlined" placeholder='Description'/>  */}

      <Text>Due Date</Text>
      <TextField type="date" id="outlined-basic" value={task.date}
       onChange={handleInput} name='date' variant="outlined" placeholder='Due Date'/>  

      <Text>Due Time</Text>
      <TextField type="time" id="outlined-basic" value={task.timing}
       onChange={handleInput} name='timing' variant="outlined" placeholder='timing'/>  
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


