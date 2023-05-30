import React from 'react'
import styled from 'styled-components';




const Container = styled.div`
margin-top: 80px;
margin-left: 10px;
`

const Heading = styled.div`

font-size: 50px;
font-weight: bold;
width: 70%;
margin-left: auto;
margin-right: auto;
`
const Desc = styled.div`
margin-top: 15px;
width: 50%;
margin-left: auto;
margin-right: auto;


font-size: 17px;
font-weight: 500;
color: grey;
`

const Total = styled.div`
`
const MainDiv = styled.div`
margin-top: 20px;
display: flex;
`
const QuesDiv = styled.div`
margin-left: 5px;
font-size: 20px;
font-weight: 500;
`
const Count =styled.div`
font-size: 20px;
font-weight: 500;
`
const Option = styled.div`
margin: 10px;
width: 40%;
display: flex;
flex-direction: row;
justify-content: space-between;

`
const MyInput = styled.input`
margin-left: 10px;
width: 22px;
height: 22px;
font-weight: bold;

`
const Ansdiv = styled.div`
display: flex;
`
const AnsText = styled.div`
margin-left: 5px;
font-size: 20px;
font-weight: 500;


`
const Remark = styled.textarea`
margin-left: 20px;
margin-top:20px ;
padding: 3px;
color: grey;
font-weight: bold;
border: transparent;
border-radius: 5px;

background-color: #e9e9e9;
`
const Flexdiv = styled.div`
display: flex;

`
const index = () => {
  return (
    <Container>
    <Heading>Evaluate Your Personal Development  </Heading>
    <Desc>The Personality Development Evaluation is an empowering journey that allows individuals to dive deep into the core of their being, exploring their unique traits, strengths, and areas for growth. </Desc>
   <Flexdiv>
    <Total>
      <MainDiv>
        <Count>1.</Count><QuesDiv>Have you dilivered your best which you were capable?</QuesDiv>   
      </MainDiv>
     <Option>
       <Ansdiv>
        <MyInput type='radio' name='answer' value='yes'/>
        <AnsText>Yes</AnsText>
       </Ansdiv>
       <Ansdiv>
        <MyInput type='radio' name='answer' value='no'/>
        <AnsText>No</AnsText>
       </Ansdiv>
      </Option>
      <Remark cols='40' rows='3'>
       Hey I gave my best to develop this masterpiece
      </Remark>
    </Total>
    <Total>
      <MainDiv>
        <Count>2.</Count><QuesDiv>Have you dilivered your best which you were capable?</QuesDiv>   
      </MainDiv>
     <Option>
       <Ansdiv>
        <MyInput type='radio' name='answer' value='yes'/>
        <AnsText>Yes</AnsText>
       </Ansdiv>
       <Ansdiv>
        <MyInput type='radio' name='answer' value='no'/>
        <AnsText>No</AnsText>
       </Ansdiv>
      </Option>
      <Remark cols='40' rows='3'>
       Hey I gave my best to develop this masterpiece
      </Remark>
    </Total>
    </Flexdiv>
    <Total>
      <MainDiv>
        <Count>3.</Count><QuesDiv>Have you dilivered your best which you were capable?</QuesDiv>   
      </MainDiv>
     <Option>
       <Ansdiv>
        <MyInput type='radio' name='answer' value='yes'/>
        <AnsText>Yes</AnsText>
       </Ansdiv>
       <Ansdiv>
        <MyInput type='radio' name='answer' value='no'/>
        <AnsText>No</AnsText>
       </Ansdiv>
      </Option>
      <Remark cols='40' rows='3'>
       Hey I gave my best to develop this masterpiece
      </Remark>
    </Total>
    <Total>
      <MainDiv>
        <Count>4.</Count><QuesDiv>Have you dilivered your best which you were capable?</QuesDiv>   
      </MainDiv>
     <Option>
       <Ansdiv>
        <MyInput type='radio' name='answer' value='yes'/>
        <AnsText>Yes</AnsText>
       </Ansdiv>
       <Ansdiv>
        <MyInput type='radio' name='answer' value='no'/>
        <AnsText>No</AnsText>
       </Ansdiv>
      </Option>
      <Remark cols='40' rows='3'>
       Hey I gave my best to develop this masterpiece
      </Remark>
    </Total>
    <Total>
      <MainDiv>
        <Count>5.</Count><QuesDiv>Have you dilivered your best which you were capable?</QuesDiv>   
      </MainDiv>
     <Option>
       <Ansdiv>
        <MyInput type='radio' name='answer' value='yes'/>
        <AnsText>Yes</AnsText>
       </Ansdiv>
       <Ansdiv>
        <MyInput type='radio' name='answer' value='no'/>
        <AnsText>No</AnsText>
       </Ansdiv>
      </Option>
      <Remark cols='40' rows='3'>
       Hey I gave my best to develop this masterpiece
      </Remark>
    </Total>
    </Container>
  )
}

export default index