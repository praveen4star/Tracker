import React,{useState,useEffect} from 'react';
import API from '../../utils/api';
import TaskCard from 'component/Task';

const Today=()=>{
  const[todaytask,setTask]=useState([]);
  
  const fetchTask=()=>{
      try{
        API.getTaskBYToday((flag,res)=>setTask(res.data));
      }
      catch(err){
        console.log(err);
      }
    }
  
   useEffect(()=>{
        fetchTask();
    },[]);

  return (
    <div className="today" style={{marginTop:"100px",width:"100%"}}>
      <h1 style={{marginTop:"20px",marginBottom:"50px",textAlign:"center"}}>Today Task</h1>
     {
      todaytask&&todaytask.map((task)=>{
        const date=`${task?.date?.day}-${task?.date?.month}-${task?.date?.year}`;
     return  <TaskCard key={task._id} id={task._id} name={task.task_name} due={task.timinng} duedate={date} />
        })
      }
    </div>
  )
}

export default Today;