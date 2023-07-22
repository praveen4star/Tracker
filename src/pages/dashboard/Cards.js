import  React,{useState,useEffect} from 'react';
import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import jwtInterceoptor from 'utils/jwtinterceptor';
import { Link } from 'react-router-dom';
import { SlOptionsVertical } from "react-icons/sl";
import './Card.css';


 const Plancard= (props)=> {
  const{number,name,desc,total,completed}=props;
  return (
    <>
      <div  className="card">
        <div className="card-wrapper">
          <div  className="circle">{number}</div>
          <div className="card-text1">{name}  </div>
          <div className="card-text2"><SlOptionsVertical /></div>
        </div>
        <div className="pro-wrapper">
           <div className="progress">
            {
            total!=0?
           <CircularProgressbar value={completed/total} maxValue={1} text={`${completed/total * 100}%`} 
                   styles={buildStyles({textSize:'25px',textColor:'black'})} />: <CircularProgressbar value={completed/total} maxValue={1} text={`${0}%`} 
                   styles={buildStyles({textSize:'25px',textColor:'black'})} />
            }
           </div>
           <div  className="progress-text">
            {completed}/{total}
          </div>
        </div>
        <div className="card-description">{desc}</div>
      </div>
    </>
  );
}
export default Plancard;