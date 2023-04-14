import React from 'react'
import { useState,useRef } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const Container = styled.div`

width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

const HelloText = styled.div`
margin: 10px 5px;
padding: 5px;
display: flex;
align-items: center;
justify-content: center;

`;

const Hello = styled.text`
font-size: 40px;
font-weight: bold;

`;
const MainBox = styled.div`
display: flex;
flex-direction: column;
`;

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const TextSpan = styled.span`
`;

const Form = styled.form`
margin:1rem;
padding: 1rem 6rem;
border: 1px solid transparent;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

`
const FieldText = styled.label`
margin: 4px;
padding-left: 10px;
font-size: 15px;
font-weight: 500;

`;
const Input = styled.input`
margin: 3px;
width: 365px;
padding: 3px;
font-size: 15px;
height: 3rem;
border: 1px solid gray;
border-radius: 5px;
&:focus {
    outline: none;
    border-color: blue;
  }


`;

const ButtonBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 365px;
  border: none;
  background-color: blue;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

`;


const SectionSecond = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const FbButton = styled.button`
  
  background-color: blue; 
  width: 365px;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;
const GoogleButton = styled.button`
  background-color: transparent;
  width :365px ;
  border: 1px solid lightgray;
  border-radius: 10px;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

`;
const OrWithText = styled.text`

`;
const MidText = styled.span`

`;
const LoginSection = styled.div`
margin: 10px;
display: flex;
align-items: center;
justify-content: space-between;
`;


const LoginButton = styled.button`
padding-left: 10px;
border: none;
background: none;
font-size: 15px;
color: blue;
`;

const Registration = () => {
  const errRef = useRef();
  const Navigate = useNavigate();
  const [errMsg, setErrMsg] = useState('');
  const [userRegistration, setUserRegistration] = useState({
    fName:"",
    lName:" ",
    email:"",
    proname:"",
    password:"",
    confirmpassword:""
  });

  
  const handleInput = (e)=>{
    const name = e.target.name; 
    const value = e.target.value;
   setUserRegistration({...userRegistration,[name]:value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const { fName,lName,email,proname,password,confirmpassword}=userRegistration;
    if (password !== confirmpassword) { 
        setErrMsg("Password Does'nt Match");
        return;
    }
    try {
      const response = await axios.post("http://localhost:9000/api/users/signup",
          JSON.stringify({email:email
            ,fName:fName,lName:lName,password:password,type:proname}),
          {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true
          }
      );
      if(response?.data?.message ==="successfully user has created his account"){
             Navigate('/login');
      }
      userRegistration({name:"",email:"",proname:"",password:"",confirmpassword:""});
  } catch (err) {
     if (err.response?.data?.message === "user has already account with this email") {
      setErrMsg('Username Taken');
  } else {
      setErrMsg('Registration Failed');
  }
      errRef.current.focus();
  }
}

 
return (
    <>
    <Container>
      <HelloText>
      <Hello>Hi, Welcome to Task Exhibitor</Hello>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>  
      </HelloText>

    <Form  onSubmit={handleSubmit}>
      <MainBox>
      <FieldText>
        <TextSpan  htmlFor='name'>First Name</TextSpan>
      </FieldText>
      <Box>
        <Input 
        type='text'
        autoComplete='off'
        value={userRegistration.fName}
        onChange={handleInput}
        name='fName'
        id='fName'/>
      </Box>
      </MainBox>

      <MainBox>
      <FieldText>
        <TextSpan  htmlFor='lName'>Last Name</TextSpan>
      </FieldText>
      <Box>
        <Input 
        type='text'
        autoComplete='off'
        value={userRegistration.lName}
        onChange={handleInput}
        name='lName'
        id='lName'/>
      </Box>
      </MainBox>

      
      <MainBox>
      <FieldText>
        <TextSpan  htmlFor='email'>Email</TextSpan>
      </FieldText>
      <Box>
        <Input
         type='email'
         autoComplete='off'
         value={userRegistration.email}
         onChange={handleInput}
         name='email'
         id='email'/>
      </Box>
      </MainBox>

      <MainBox>
      <FieldText>
        <TextSpan  htmlFor='proname'>Profession</TextSpan>
      </FieldText>
      <Box>
        <Input
         type='text'
         autoComplete='off'
         value={userRegistration.proname}
         onChange={handleInput}
         name='proname'
         id='proname'/>
      </Box>
      </MainBox>
      <MainBox>

      <FieldText>
        <TextSpan  htmlFor='password'>Password</TextSpan>
      </FieldText>
      <Box>
        <Input 
        type='password'
        autoComplete='off'
        value={userRegistration.password}
        onChange={handleInput}
        name='password' 
        id='password'/>
      </Box>
      </MainBox>
      <MainBox>
      <FieldText>
        <TextSpan  htmlFor='confirmpassword'> Confirm Password</TextSpan>
      </FieldText>
      <Box>
        <Input
         type='password'
         autoComplete='off'
         value={userRegistration.confirmpassword}
         onChange={handleInput}
         name='confirmpassword'
         id='confirmpassword'/>
      </Box>
      </MainBox>
      <ButtonBox>
        <Button type='submit' >Register</Button>
      </ButtonBox>

      <SectionSecond>
        <OrWithText> <MidText>or With</MidText></OrWithText>

      <FbButton style={{margin : "10px",color:"white"}}>
       
        Login With Facebook
      </FbButton>
      <GoogleButton  style={{margin : "10px"}}>
        
       Login With Google
      </GoogleButton>
      <LoginSection>
        <MidText>Already have an account</MidText>
        <LoginButton onClick={()=>Navigate("/login")}><Link to="/login">Login</Link></LoginButton>
      </LoginSection>
      </SectionSecond>


    </Form>
    </Container>
    </>
  )
}

export default Registration