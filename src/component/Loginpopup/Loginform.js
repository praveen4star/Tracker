import React, { useState,useRef } from 'react';
import './login.css';
import {Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";   
import { logauth } from '../../store/authSlice';
import { Link } from 'react-router-dom';

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const errRef=useRef();
  const navigate=useNavigate();
  const errMsg = "";
  const [logindet, setLogin] = useState({
    email:"",
    password:"",
  });

  const { isLoggedIn,user } = useSelector((state) => state.auth);


const handleInput = (e)=>{
  const name = e.target.name; 
  const value = e.target.value;
  setLogin({...logindet,[name]:value});
}

const{email,password}=logindet;
const dispatch=useDispatch();

const handleSubmit = async (e) => {
  e.preventDefault();
  let payload = {
    email: email,
    password: password
  }

dispatch(logauth(payload))
  .unwrap()
  .then(() => {
    navigate("/dashboard");
    window.location.reaload()
  })
  .catch((err) => {
    console.log(err);
  });
};

 if(isLoggedIn){
  return <Navigate to="/dashboard" />;
 }

  return (
    <>
      <button className="open-btn" onClick={togglePopup}>
        Login
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Login</h2>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form>

              <label htmlFor="email">Email:</label>
              <input type="email" 
               autoComplete='off'
               value={logindet.email}
               onChange={handleInput}
               name='email'
               id='email' />

              <label htmlFor="password">Password:</label>
              <input type='password'
               autoComplete='off' 
               value={logindet.password}
               onChange={handleInput}
               name='password' 
               id='password'/>

              <a href='#' className='forget-link'>forget password?</a>

              <button className='long-button'>Login with facebook</button>
              <button className='long-button'>Login with Google</button>

              <Link className='forget-link' to="/registration">Signup</Link>
            <div className='button-section'>
            <button className="close-btn" onClick={togglePopup}>
              Close
            </button>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            </div> 
            </form>
           
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
