import react,{useState} from 'react';
import {AiOutlineEdit} from 'react-icons/ai';
import {SlOptionsVertical} from 'react-icons/sl';
import './taskcard.css';
import  API from 'utils/api';
import {METHOD_TYPE} from 'utils/constant';

const TaskCard=(props)=>{
    const[show,setShow]=useState(-1);
    const{name,due,duedate,id,dailytask}=props;
    const[isEditable,setIsEditable]=useState(false);
    const[edittask,setEdittask]=useState({"task_id" :id,
                      "task_name" : name,
                      "date" : duedate,
                      "timing" :due,
                      "is_daily_task" : dailytask,
                      "deleted_flag" : false,
                      "is_completed" : false
                    });
    
    const handleInput=(e)=>{
      e.preventDefault();
      const name = e.target.name;
      const value = e.target.value;
      setEdittask({...edittask, [name]:value })
      console.log(edittask[name])
    }
    

      const compareDates = () => {
        const date1=new Date().getTime();
        let date2 = new Date(`${duedate}T${due}:00+05:30`).getTime();
        console.log(duedate);
        console.log(`${duedate}T${due}:00+05:30`);
        if (date1 < date2) {
           return  true;
        }else if (date1 > date2) {
           return false;
        } else {
           return true;
        }
      };
       // const result=compareDates(today, "2023-05-28T14:36:00+05:30");

    const handleSubmit=(e)=>{
      try{
          API.getTask(METHOD_TYPE.PUT,edittask,(flag,res)=>console.log(res));
        }
      catch(err){
         console.log(err);
      }
      setIsEditable(false);
    }

    return(
        <div className="task"  onMouseEnter={()=>setShow(id)} onMouseLeave={()=>setShow(-1)}>
          <div className="task-row1">
           <div className="task-name">
            <button className="complete"></button>
            {isEditable?<input type="text" name="task_name" value={edittask.task_name} onChange={handleInput} />:<span>{name}</span>}
           </div>
            {show==id&&  <div className="task-icons">
              <AiOutlineEdit size="20px" onClick={()=>setIsEditable(true)}/>
              <span><SlOptionsVertical/></span>
            </div>}
          </div>
          <div className="task-row2">
            <div className="task-deadline">
              <p>{isEditable?(<input type="time" name="timing" value={edittask.timing} onChange={handleInput}/>):due}</p>
              <p>{isEditable?<input type="date" name="date" value={edittask.date} onChange={handleInput} />:duedate}</p>
            </div>
            <div className="task-edit">
              {isEditable&&<button className="save" onClick={handleSubmit}>Save</button>}
              {isEditable&&<button className="save" onClick={()=>setIsEditable(false)}>Cancel</button>}
            </div>
           {compareDates()&&<button className="due-button">Due</button>}
          </div>     
        </div>
    )
}

export default TaskCard;