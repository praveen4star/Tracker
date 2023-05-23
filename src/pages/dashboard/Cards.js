import  React,{useState,useEffect} from 'react';
import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import jwtInterceoptor from 'utils/jwtinterceptor';
import { Link } from 'react-router-dom';
import { SlOptionsVertical } from "react-icons/sl";
import './Card.css';


 const Plancard= (props)=> {
  const{number,name,desc}=props;
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
            <CircularProgressbar value={0.60} maxValue={1} text={`${0.60 * 100}%`} 
            styles={buildStyles({textSize:'25px',textColor:'black'})} />
           </div>
           <div  className="progress-text">
            6/10
          </div>
        </div>
        <div className="card-description">{desc}</div>
      </div>
    </>
  );
}
export default Plancard;