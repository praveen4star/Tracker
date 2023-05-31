import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import ResponsiveDialog from './Taskpopup';
import API from '../../utils/api';
import { useSearchParams } from 'react-router-dom';
import  './task.css';
import TaskCard from 'component/Task';

const TaskPage =() => {
    const [tasks,setTask]=useState([]);
    const [params]=useSearchParams();
    const id=params.get("t");
    const payload={
      "plan_id":id
    }

    const fetchTask=()=>{
      try{
        API.getTask(null,payload,(flag,res)=>setTask(res.data));
      }
      catch(err){
        console.log(err);
      }
   }

   useEffect(()=>{
    fetchTask();
   },[])

  return (
    <div className="task-group">
      <div className="plan-name">
        <p className="plan-text">Data Structure</p>
        <ResponsiveDialog />
      </div>
     {
      tasks&&tasks.map((task)=>{
        const date=task?.date?.month<10?`${task?.date?.year}-0${task?.date?.month}-${task?.date?.day}`:`${task?.date?.year}-${task?.date?.month}-${task?.date?.day}`;
     return  <TaskCard key={task._id} id={task._id} name={task.task_name} due={task.timing} duedate={date} dailytask={task.is_daily_task} />
        })
      }
    </div>

)  }
   
   export default TaskPage;