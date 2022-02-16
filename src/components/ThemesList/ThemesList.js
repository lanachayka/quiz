import React from 'react';
import { useSelector } from 'react-redux';
import st from './ThemesList.module.css';

export default function ThemesList() {
  const {quiz} = useSelector(state => state.quiz)
  return (
    <div>
      <h3>Перелік тем</h3>
      <ul>
        {quiz.map(theme => (
          <li key={theme.name}>{theme.name}</li>
        ))}
      </ul>
    </div>
  )
}
