import React,{useState,useEffect}  from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';
import  './heatmap.css';
import API from 'utils/api';



const Heatmap=()=>{
  const[comp,setComp]=useState([]);
 
  
  const fetchTask=()=>{
    try{
      API.getConsistency((flag,res)=>setComp(res.data));
     }
    catch(err){
     console.log(err)
    }
  }

 useEffect(()=>{
  fetchTask();
 },[])

//  to format date  like heatmap
  let dates=[];
   for(var i=0;i<comp.length;i++){
    comp[i]?.data?.forEach(element => {
      const datessplit=element?.date.split("/");
      const count=element?.cnt;
      const date=`${datessplit[2]}-${datessplit[1]}-${datessplit[0]}`;
      dates.push({date,count});
    });
   }

 
  const date=new Date();
  const today=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  const prevyear=`${date.getFullYear()-1}-${date.getMonth()}-${date.getDate()}`;
  return (
    <div style={{marginLeft:"16%",marginTop:"5%"}}>
      <CalendarHeatmap
        startDate={prevyear}
        endDate={today}

         values={dates}

        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }
          if(value.count>=4)
            return `color-github-4`;
            return `color-github-${value.count}`;
        }}

        tooltipDataAttrs={value => {
          return {
            'data-tip': `${value.date} has count: ${value.count}`,
          };
        }}
        showWeekdayLabels={true}
      />
      <ReactTooltip />
    </div>
  );
}



export  default Heatmap;