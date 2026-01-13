
import React, { useEffect, useState } from 'react'
import question from "./Questions";

export default function QuizApp() {
  const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0)
  const [score,setScore]=useState(0)
  const currentQuestion = question[currentQuestionIndex]
  const [quizFinished,setQuizfinished]=useState(false)
  const [timer,settimer]=useState(10)
  const handleanswer = (option)=>{
    if(option===currentQuestion.answer){
      setScore(score+1)
    }
    if(currentQuestionIndex +1 < question.length){
      setCurrentQuestionIndex(currentQuestionIndex+1)
      settimer(10)
    }else{
      setQuizfinished(true)

    }

  }
  useEffect(()=>{
    if(quizFinished)
      return;
    if(timer===0){
      handleanswer('')
      return;
    }
    const timeId= setTimeout(() => {
      settimer(timer-1)
      
    }, 1000);
    return()=> clearTimeout(timeId)
  },[timer,quizFinished])
  if(quizFinished){
    return(
      <div>
        <h1>Quiz finished</h1>
        <p>your score :{score}/{question.length}</p>
        <button onClick={()=>{setCurrentQuestionIndex(0),setScore(0),setQuizfinished(false)}}>Restart</button>
      </div>
    )
  }
  return (
    <div>
      <h1>QuizApp</h1>
      <p>{currentQuestion.question}</p>
      <p>{timer}</p>
      
      {
        currentQuestion.options.map((option)=>(
          <div key={option.id}>
            <button onClick={()=>handleanswer(option)}>{option}</button>
          </div>
        ))
      }
    </div>
  )
}
