import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseThema } from '../../store/actionCreators';
import st from './ThemesList.module.css';

export default function ThemesList() {
  const { quiz } = useSelector(state => state.quiz);
  const dispatch = useDispatch();
  const setThema = (thema) => {
    dispatch(chooseThema(thema));
  }
  return (
    <div>
      <h3>Перелік тем</h3>
      <ul>
        {quiz.map(theme => (
          <li onClick={() => setThema(theme.name)} key={theme.name}>{theme.name}</li>
        ))}
      </ul>
    </div>
  )
}
