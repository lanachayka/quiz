import React from 'react'
import { useSelector } from "react-redux";

export default function Result() {
  const { quiz, thema, userResult } = useSelector(state => state.quiz);
  const themaQuestions = quiz.find(item => item.name === thema);
  return (
    <div>
      Your Result is: {userResult} / {themaQuestions.questions.length}
    </div>
  )
}
