import React,{useState,useEffect} from 'react';
import API from '../../utils/api';
import TaskCard from 'component/Task';

const Upcoming=()=>{
  const[dailytask,setTask]=useState([]);
  
  const fetchTask=()=>{
      try{
        API.getUpcomingTask((flag,res)=>setTask(res.data));
      }
      catch(err){
        console.log(err);
      }
    }
  
   useEffect(()=>{
        fetchTask();
    },[]);

  return (
    <div className="daily" style={{marginTop:"150px",width:"100%",marginBottom:"100px"}}>
      <h1 style={{textAlign:'center',marginBottom:"50px"}}>Upcoming</h1>
        {
      dailytask&&dailytask.map((task)=>{
        const date=`${task?.date?.day}-${task?.date?.month}-${task?.date?.year}`;
     return  <TaskCard key={task._id} id={task._id} name={task.task_name} due={task.timinng} duedate={date} />
        })
      }
    </div>
  )
}

export default Upcoming;