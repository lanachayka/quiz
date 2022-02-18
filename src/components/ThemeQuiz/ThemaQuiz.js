import React, { useState } from 'react';
import st from './ThemaQuiz.module.css';
import { useSelector } from 'react-redux';

export default function ThemaQuiz() {
  const { quiz, thema } = useSelector(state => state.quiz);
  const [questionNumber, setQuestionNumber] = useState(0);
  const themaQuestions = quiz.find(item => item.name === thema);
  const nextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };
  return (
    <div className={st.wrapper}>
      <h3 className={st.title}>{thema}</h3>
      <p>{themaQuestions.questions[questionNumber].question}</p>
      {questionNumber >= themaQuestions.questions.length-1
        ? <button>Show Result</button>
        : <button onClick={nextQuestion}>Next question</button>}
    </div>
  )
}
