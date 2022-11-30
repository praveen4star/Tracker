import React from 'react'
import styled from 'styled-components'
import Logo3 from  'assets/Images/icon3.png'
import Logo2 from  'assets/Images/icon2.png'
import Logo1 from  'assets/Images/icon1.png'






const Heading = styled.h1`
margin: 1rem 0rem;
font-size: 2.5rem;
text-align: center;
font-family: 'Lato', sans-serif;

@media screen and (max-width:700px){
  font-size: 3rem;
}


`
const Container = styled.div`
width: 85%;

margin: auto;
display: flex;
flex-wrap: wrap;
justify-content: space-around;


//=========Large Devices=========//


//=======Medium Devices=========//
@media screen and (max-width:1350px){
  width: 100%;
}
//========== small devices=========//
  @media screen and (max-width:820px){
   width: 70%;
   flex-direction: column;
}


`
const Card = styled.div`
margin: 1rem;
padding: 2rem 0rem;
flex-basis: 22%;
border-radius: 1rem;
box-shadow: 3px 3px 10px 3px lightgray;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

//=======small devices======//
@media screen and (max-width:700px){
  padding: 3px 0px;
}

@media screen and (max-width:1070px){
  padding: 0px 0px;
  flex-basis: 20%;
}




`
const Image = styled.img`
margin-top: 1.8rem;

height: 4rem;
width: 4rem;
object-fit: contain;

`
const Text = styled.h2`
@media screen and (max-width:1070px){
  font-size: 1.5rem;
}
@media screen and (max-width:900px){
  font-size: 1.3rem;
}

`
const Para = styled.p`
padding: 1rem 2rem;
font-size: 1rem;
font-weight: 700;
text-size-adjust: none;
@media screen and (max-width:1100px){
  padding: 0.5rem 1rem;
  font-size:  0.9rem;
}
@media screen and (max-width:821px){
  padding: 1rem 3rem;
  font-size:  1.3rem;
}
`
const Circle=styled.div`
margin-top: 3.5rem;
margin-bottom: 1.5rem;
width: 8rem;
height: 8rem;
border-radius: 50%;
background-color:#2DC6DB1F;
display: flex;
align-content: center;
justify-content: center;

@media screen and (max-width:900px){
  margin-top: 1rem;
}

`


const Feature = () => {
  return (
    <>
     <Heading>Features</Heading>
     <Container>
        <Card>
             <Circle>
             <Image src={Logo1} alt='img'/>
             </Circle>
             <Text>Plan Task</Text>
             <Para>
             Plan , Organize  your task to track progress and get notify  when  falling behind that help you  to complete   your   work  on time.
             </Para>
        </Card>
        <Card>
             <Circle>
             <Image src={Logo2} alt='img'/>
             </Circle>
             <Text>Track Progress</Text>
             <Para>
             Track your progress with dashboards and graph.Sync your workflow with calender,set up reminder and priorities your task.
             </Para>
        </Card>
        <Card>
             <Circle>
             <Image src={Logo3} alt='img'/>
             </Circle>
             <Text>Consistency</Text>
             <Para>
             We use consistency alogrithm to generatedaily and weekly reportthat help you to becomemore consistent and accountable.
             </Para>
        </Card>
        <Card>
             <Circle>
             <Image src={Logo3} alt='img'/>
             </Circle>
             <Text>Consistency</Text>
             <Para>
             We use consistency alogrithm to generatedaily and weekly reportthat help you to becomemore consistent and accountable.
             </Para>
        </Card>
        
         
        
     </Container>
    </>
  )
}

export default Feature