import React, { useState } from 'react';
import st from './ThemaQuiz.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { correctAnswer, endQuiz } from '../../store/actionCreators';
import Variants from '../Variants/Variants';

export default function ThemaQuiz() {
  const dispatch = useDispatch();
  const { quiz, thema } = useSelector(state => state.quiz);

  const [questionNumber, setQuestionNumber] = useState(0);

  const [answer, setAnswer] = useState('');

  const themaQuestions = quiz.find(item => item.name === thema);

  const question = themaQuestions.questions[questionNumber];

  const nextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
    if (answer === question.rightAnswer) {
      dispatch(correctAnswer());
    }
  };

  const showResult = () => {
    if (answer === question.rightAnswer) {
      dispatch(correctAnswer());
    }
    dispatch(endQuiz());
  }

  return (
    <div className={st.wrapper}>
      <h3 className={st.title}>{thema}</h3>
      <p>{question.question}</p>
      <Variants name={question.question} variants={question.variants} setAnswer={setAnswer}/>
      {questionNumber >= themaQuestions.questions.length-1
        ? <button onClick={showResult}>Show Result</button>
        : <button onClick={nextQuestion}>Next question</button>}
    </div>
  )
}
