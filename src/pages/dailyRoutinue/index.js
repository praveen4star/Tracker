import React,{useState,useEffect} from 'react';
import API from '../../utils/api';
import TaskCard from 'component/Task';

const Today=()=>{
  const[dailytask,setTask]=useState([]);
  
  const fetchTask=()=>{
      try{
        API.getDailyTask((flag,res)=>setTask(res.data));
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
        {
      dailytask&&dailytask.map((task)=>{
        const date=`${task?.date?.day}-${task?.date?.month}-${task?.date?.year}`;
     return  <TaskCard key={task._id} id={task._id} name={task.task_name} due={task.timinng} duedate={date} />
        })
      }
    </div>
  )
}

export default Today;