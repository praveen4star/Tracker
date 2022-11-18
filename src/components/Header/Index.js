import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'


const Container=styled.div`
width: 100%;
height: 100vh;
display: flex;

@media screen and (max-width:900px){
  flex-direction: column;
}

`
const Wrapper1=styled.div`


flex: 1;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Box=styled.div`
padding: 5px;
display: flex;
align-content: center;
justify-content: center;
`
const Box2=styled.div`


margin-top: 50px;
padding: 5px;
display: flex;
align-content: center;
justify-content: center;
`
const BigText=styled.h1`
font-weight: 800;
font-size: 36px;
display: flex;
align-items: center;
text-align: center;

`
const SmallerText=styled.h3`
font-weight: 700;
font-size: 24px;
display: flex;
align-items: center;
text-align: left;
`
const Button=styled.button`
margin-top: 150px;
padding: 7px;
width: 252px;
border-radius: 15px;
font-size: 33px;
font-weight: 600;
background-color: #7E1CFE;
color: white;
cursor: pointer;
@media screen and (max-width:900px){
  margin-top: 60px;
}

`
const Wrapper2=styled.div`

flex: 1;
display: flex;
align-items: center;
justify-content: center;
`
const Box3=styled.div`
  top: 233px;
  border: 4px solid gray;
  border-radius: 5px;
  height: 50%;
  width: 70%;
  aspect-ratio: 1;
  
  @media screen and (max-width:900px){
   height: 70%;
   width: 80%;
   aspect-ratio: 1;
  }
`
const Header = () => {
  return (
    <>
  
    <Container>
      
      <Wrapper1>
      <Box>
      <BigText>Avoid Distraction And Become More <br/>Focused And Consistent</BigText>
      </Box>
      <Box2>
      <SmallerText>Task Exhibitor is A Platform Where Art ,Science & <br/>Craft Meet To Make You More Consistent,Organised <br/>And Efficient</SmallerText>  
      </Box2>
      <Button>Start</Button>
      </Wrapper1>
      <Wrapper2>
        <Box3>
          <ReactPlayer width='100%'height='100%' url='https://youtu.be/0h7ETdJeBAo' controls />
        </Box3>
        
         </Wrapper2>
    </Container>
    </>
  )
}

export default Header