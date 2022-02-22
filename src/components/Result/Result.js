import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import st from './Result.module.css';
import { chooseThema, startQuiz } from '../../store/actionCreators';

export default function Result() {
  const { quiz, thema, userResult } = useSelector(state => state.quiz);
  const themaQuestions = quiz.find(item => item.name === thema);
  const dispatch = useDispatch();
  const resetThema = () => {
    dispatch(chooseThema(''));
    dispatch(startQuiz());
  }
  return (
    <div className={st.wrapper}>
      <p>Результат: {userResult} / {themaQuestions.questions.length}</p>
      <button onClick={resetThema} className={st.btn}>На головне меню</button>
    </div>
  )
}
