import React,{useState,useRef,useContext} from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthContext from "../../component/shared/AuthContext";
const Container = styled.div`

width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const HelloText = styled.div`
margin: 30px 5px;
padding: 5px;
display: flex;
align-items: center;
justify-content: center;
`;
const Hello = styled.div`
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
const Form = styled.form`
margin:1rem;
padding: 1rem 6rem;
border: 1px solid transparent;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

`;
const FieldText = styled.div`
margin: 4px;
padding-left: 10px;
font-size: 15px;
font-weight: 500;
`;
const TextSpan = styled.span`
`;
const Input = styled.input`
display: flex;
align-items: center;
justify-content: center;
width: 360px;
margin: 3px;
font-size: 15px;
height: 3rem;
border: 1px solid gray;
border-radius: 5px;
&:focus {
    outline: none;
    border-color: blue;
  }
`;

const ForgetPassword = styled.button`
background: none;
border: none;
text-decoration: underline;
color: blue;
cursor: pointer;

`;
const ButtonBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
`;
const Button = styled.button`
  margin-top: 10px;
  width: 360px;
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
  width :360px ;
  border: 1px solid lightgray;
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
  width :360px ;
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
const OrWithText = styled.div`

`;
const MidText = styled.span`

`;
const SignupSection = styled.div`
margin: 20px;
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

const Login = () => {
  const {login}= useContext(AuthContext)

  const errRef=useRef();
  const navigate=useNavigate();
  const [errMsg,setErrMsg]=useState('');
   
  const [logindet, setLogin] = useState({
    email:"",
    password:"",
  });

 
const handleInput = (e)=>{
  const name = e.target.name; 
  const value = e.target.value;
  setLogin({...logindet,[name]:value});
}

const{email,password}=logindet;


const handleSubmit = async (e) => {
  e.preventDefault();
  let payload = {
    email: email,
    password: password
  }
  await login(payload);
};



  return (
    <>
    <Container>
    
      <HelloText>
        <Hello>Hi, Welcome Back !</Hello>
      </HelloText>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> 
    <Form action='' onSubmit={handleSubmit}>
      <MainBox>
      <FieldText >
        <TextSpan htmlFor='email'>Email</TextSpan>
      </FieldText>
      <Box>
        <Input 
        type='email'
        autoComplete='off'
        value={login.email}
        onChange={handleInput}
        name='email'
        id='email'/>
      </Box>
      </MainBox> 
      
      <MainBox>
      <FieldText>
      <TextSpan htmlFor='password'>Password</TextSpan>
      </FieldText>
      <Box>
        <Input
         type='password'
         autoComplete='off' 
         value={login.password}
         onChange={handleInput}
         name='password' 
         id='password'/>
      </Box>
      </MainBox>
      <ButtonBox>
      <ForgetPassword >Forget Password ?</ForgetPassword>
      </ButtonBox>
     
      <ButtonBox>
        <Button type='submit'>Login</Button>
      </ButtonBox>

      <SectionSecond>
        <OrWithText> <MidText>or With</MidText></OrWithText>

      <FbButton >
       
        Login With Facebook
      </FbButton>
      <GoogleButton  style={{margin : "10px"}}>
        
       Login With Google
      </GoogleButton>
      <SignupSection>
        <MidText>Don't have an account</MidText>
        <LoginButton onClick={()=>navigate("/registration")}><Link to="pages/profile">Signup</Link></LoginButton>
      </SignupSection>
      </SectionSecond>


    </Form>
    </Container>
    </>
  )
}

export default Login