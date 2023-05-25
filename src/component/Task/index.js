import react,{useState} from 'react';
import {AiOutlineEdit} from 'react-icons/ai';
import {SlOptionsVertical} from 'react-icons/sl'
import './taskcard.css'

const TaskCard=(props)=>{
    const[show,setShow]=useState(-1);
    const{name,due,duedate,id}=props;
    return(
        <div className="task"  onMouseEnter={()=>setShow(id)} onMouseLeave={()=>setShow(-1)}>
          <div className="task-name">
            <button></button>
            <span>{name}</span>  
            <div className="task-due">
            <p>{due}<span>{duedate}</span></p>
            </div>     
          </div>
          {show==id&&  <div className="task-icons">
                <AiOutlineEdit size="20px"/>
                <span><SlOptionsVertical/></span>
           </div>}
        </div>
    )
}

export default TaskCard;