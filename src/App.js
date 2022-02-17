import { useState } from "react";
import { useSelector } from "react-redux";
import ThemesList from "./components/ThemesList/ThemesList";
import ThemaQuiz from "./components/ThemeQuiz/ThemaQuiz";

function App() {
  const {thema} = useSelector(state => state.quiz);
  return (
    <div>
      <h1>Вікторина</h1>
      {thema.length === 0 ?
        <ThemesList /> : <ThemaQuiz />
      }
    </div>
  );
}

export default App;
