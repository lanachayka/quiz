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
    <div className={st.wrapper}>
      <h3 className={st.title}>Обирай тему</h3>
      <ul className={st.list}>
        {quiz.map(theme => (
          <li
            className={st.item}
            onClick={() => setThema(theme.name)}
            key={theme.name}
          >{theme.name}</li>
        ))}
      </ul>
    </div>
  )
}
