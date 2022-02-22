import { useSelector } from "react-redux";
import ThemesList from "./components/ThemesList/ThemesList";
import ThemaQuiz from "./components/ThemeQuiz/ThemaQuiz";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";

function App() {
  const { thema, endQuiz } = useSelector(state => state.quiz);
  return (
    <div>
      <Header />
      <div className="main-content">
        {endQuiz
          ? < Result /> :
        thema.length === 0
          ? <ThemesList />
          : <ThemaQuiz />
        }
      </div>
    </div>
  );
}

export default App;
