import React from 'react';
import  question from '../../config/Question';
import './quiz.css';

const index = () => {
  return (
    <div className="quiz">
     <div className="quiz-title">Evaluate Your Personal Development  </div>
    <div className="quiz-desc">The Personality Development Evaluation is an empowering journey that allows individuals to dive deep into the core of their being, exploring their unique traits, strengths, and areas for growth. </div>
   <div className="questions">
   {
   question&& question.map((item,index)=>{
    return <div className="question" key={item?.id}>
      <div className="question-name">
        <span>{index+1}.</span>{item?.name}
      </div>
      <div className="option">
       <form>
        <input type='radio' name='answer' value='yes'/>
        <label>Yes</label>
        <input type='radio' name='answer' value='no'/>
        <label>No</label>
       </form>
      </div>
      <textarea type="text" placeholder="Did quite well in this week but wasted some time on social media" cols='30' rows='3'/>
    </div>
     })
   }
 
    </div>
    <button className="submit">Submit</button>
  </div>
  )
}

export default index