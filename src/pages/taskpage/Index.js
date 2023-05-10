import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import ResponsiveDialog from './Taskpopup';
import API from '../../utils/api';
import { useSearchParams } from 'react-router-dom';

const Wrapper = styled.div`
margin-top:150px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


const Strip = styled.button`
width: 90%;
margin: 1rem;
padding: 1rem;
border: 2px solid grey;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: space-between;

`;

const TaskName = styled.text`
font-size: 30px;
font-weight: bold;

`;

const StripContent = styled.div`
display: flex;
align-items: center;
justify-content: center;


`;

const Circle = styled.div`
margin: 0px 10px;
height: 20px;
width: 20px;
border: 1px solid grey;
border-radius: 50%;

`;

const SubContent = styled.div`
margin-left: 10px;
display: flex;
align-items: center;
justify-content: center;

`;

const PlanName = styled.text`
font-size: 15px;
font-weight: bold;

`;

const NewStrip = styled.div`
width: 90%;
margin: 1rem;
padding: 1rem;
border: 2px solid grey;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Time = styled.div`
font-size: 15px;
font-weight: 500;
color: grey;
`;

const Date=styled.div`
font-size: 15px;
font-weight: 500;
color: grey;
`;

const SecondSubContent = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
`;

const ThirdSubContent = styled.div`
margin: 0px 5px;
padding: 0px 5px;
display: flex;
align-items: flex-end;
justify-content: center;
`;

const ChangedStrip = styled.button`
width: 90%;
height: 120px;
margin: 1rem;
padding: 1rem;
border: 2px solid grey;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`;

const Desc = styled.div`
margin: 0px 40px;
padding: 10px;
`;

const DescText = styled.text`
font-size: 15px;
`;

const TimeAndDate = styled.div`
margin: 0px 40px;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
`;


  const Taskonhover=(props)=>{
        const{name,taskdate,tasktime}=props;
    const [show, setShow] = useState(true);
    return(
      <>
      {
       show? <Strip onClick={()=>setShow(!show)} >
          <StripContent>
            <SubContent>
              <Circle/>
              <PlanName>{name}</PlanName>
            </SubContent> 
          </StripContent>
          <SecondSubContent>
           <Time>{tasktime}</Time>  
          </SecondSubContent>
          <ThirdSubContent>
            <Date>{taskdate.day+"/"+taskdate.month+"/"+taskdate.year}</Date>
          </ThirdSubContent>  
        </Strip>:
       <ChangedStrip onClick={()=>setShow(!show)} >
        <StripContent>
          <SubContent>
               <Circle/>
               <PlanName>{name}</PlanName>
          </SubContent> 
          
       </StripContent>
      <Desc>
         <DescText>Hello I am Groot and I am cutest Avenger </DescText>
      </Desc>
      <TimeAndDate>
      <SecondSubContent>
          <Time>{tasktime}</Time>  
      </SecondSubContent>
      <ThirdSubContent>
              <Date>{taskdate.day+"/"+taskdate.month+"/"+taskdate.year} </Date>
      </ThirdSubContent>  
      </TimeAndDate>

      </ChangedStrip>
     }
    </>
    )
  }

 


const TaskPage =() => {
    const [tasks,setTask]=useState([]);
    const [params]=useSearchParams();
    const id=params.get("t");
    const payload={
      "plan_id":id
    }

    const fetchTask=()=>{
      try{
        function callback(flag,res){  
          setTask(res.data);   
        }
        API.getTask(payload,callback);
      }
      catch(err){
        console.log(err);
      }
   }

   useEffect(()=>{
    fetchTask();
   },[])

  return (
    <>
      <Wrapper>
        <NewStrip>
          <TaskName>Development</TaskName>
          <ResponsiveDialog/>
        </NewStrip>
      {
      tasks&&tasks.map((task,index)=> <Taskonhover key={task._id} name={task.task_name} taskdate={task.date} tasktime={task.timing} />)
      }
      </Wrapper>
    </>
   )
}

export default TaskPage;