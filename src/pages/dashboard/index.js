import React,{useEffect,useState} from 'react';
import Card from './Cards';
import ResponsiveDialog from './Popup';
import {useSelector} from 'react-redux';
import API from '../../utils/api';
import {Link,Navigate } from 'react-router-dom';
const Dashboard = () => {
  const[plans,setPlans]=useState([]);
  const{isLoggedIn,user}=useSelector((state)=>state.auth);
 
  const fetchPlan=()=>{
    try{
      function callback(flag,res){
        console.log(res)
        setPlans(res);
       }
      API.getPlan(callback);
     }
    catch(err){
     console.log(err)
    }
  }

  useEffect(() => {
     fetchPlan();
   }, []);


  if(!isLoggedIn){;
    return <Navigate to="/login"/>
  }

  return (
    <div className="dashboard">
    <div className="user-welcome">
      <p className="welcome-text">Hello<span className="user-name">Avenya</span></p>
      <ResponsiveDialog />
    </div>
    <div className="card-par">
      {
       plans&&plans.map((plan,index)=>
        <Link key={plan._id} to={"/dashboard/task?t=" + plan._id}>
         <Card key={plan._id} number={index+1} name={plan.plan_name} desc={plan.desc} />
        </Link>
       )
      } 
    </div>
   </div>
  )
}

export default Dashboard;
