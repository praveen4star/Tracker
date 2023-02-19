import React,{useState} from 'react'
import styled from 'styled-components';


const MainContainer = styled.div`
padding: 30px;
`;

const Container = styled.div`
width: 100%;
vh;
display: flex;
justify-content: center;
`;

const HeadText = styled.div`
margin: 10px;
font-size: 50px;
font-weight: bold;
text-align: center;
`;

const Wrapper = styled.div`
margin-top: 50px;
height: 300px;
width: 50%;
padding-left:20px ;

border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;



`;



const MyScore = styled.div`
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`;

const QuestionDiv = styled.div`

padding: 20px;

`;

const QuestionNum = styled.div`
font-weight: bold;

`;
const SecondDiv = styled.div`
font-size: 30px;
font-weight: 700;
`;

const ResultText = styled.div`
font-size: 30px;
font-weight: 700;
`;

const ThirdDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`;

const SubmitButton = styled.button`
margin: 5px;
padding: 10px;
width: 150px;
border-radius: 5px;
font-size: 15px;
font-weight: bold;
background-color: teal;
color: white;
`;

const ClickAnswerButton = styled.button`
margin: 10px 0px;
padding: 10px;
width: 100px;
border-radius: 5px;
font-size: 15px;
font-weight: bold;
background-color: teal;
color: white;
`;

const FirstSpan = styled.span`

`;




const Index = () => {

    var QuestionBank = [
        {
           Question:"Have you delivered your best which you were capable?",
           Answers:[
               {Answer:"Yes" , isCorrect:true},
               {Answer:"No" , isCorrect:false},
               
           ]
       },

       {
           Question:"Have the spirit of you conduct been harmonious and cooperative all the time?",
           Answers:[
               {Answer:"Yes" , isCorrect:true},
               {Answer:"No" , isCorrect:false},
               
           ]
       },

       {
           Question:"Have you been persistent in following your plan through to completion?",
           Answers:[
               {Answer:"Yes" , isCorrect:true},
               {Answer:"No" , isCorrect:false},
              
           ]
       },

       {
           Question:"Has my relationship with my colleagues in work been pleasant or unpleasant?",
           Answers:[
               {Answer:"Yes" , isCorrect:true},
               {Answer:"No" , isCorrect:false},
              
           ]
       },

       {
           Question:"Have I been open minded and tolerant in connections with all subject?",
           Answers:[
               {Answer:"Yes" , isCorrect:true},
               {Answer:"No" , isCorrect:false},
               
           ]
       },
   ];


    //useSateHook

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

const handleAnswerResponse=(isCorrect)=>{
    if(isCorrect){
        setScore(score+1);
    }
    const nextQuestion = currentQuestion+1;
    if(nextQuestion<QuestionBank.length){
        setCurrentQuestion(nextQuestion);
    }
    else{
        setShowScore(true);
    }
}
//
    console.log(QuestionBank)
const resetQuiz = ()=>{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);

}

  return (

    <MainContainer>
        <HeadText>Evalute Your Personal Development Skills</HeadText>
    <Container>
        
        <Wrapper>
        {
            showScore?(
                <MyScore>
                    <ResultText>You have scored {score} out of {QuestionBank.length}</ResultText>
                    <>
                    <SubmitButton type='submit' onClick={resetQuiz}>Evaluate Again!</SubmitButton>
                    </>
                </MyScore>
            ):(
                <>
                <QuestionDiv >
                    <QuestionNum >
                        <FirstSpan>{currentQuestion+1}</FirstSpan>/{QuestionBank.length}

                    </QuestionNum>
                    <SecondDiv >
                        {QuestionBank[currentQuestion].Question}

                    </SecondDiv>

                    <ThirdDiv >
                        {QuestionBank[currentQuestion].Answers.map((answer)=>(
                                <ClickAnswerButton onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</ClickAnswerButton>
                            ))
                        }

                    </ThirdDiv>

                </QuestionDiv>
                </>
            )
        }
        </Wrapper>
    </Container>
    </MainContainer>
  )
}

export default Index

