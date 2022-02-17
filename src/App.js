import { useSelector } from "react-redux";
import ThemesList from "./components/ThemesList/ThemesList";
import ThemaQuiz from "./components/ThemeQuiz/ThemaQuiz";
import Header from "./components/Header/Header";

function App() {
  const {thema} = useSelector(state => state.quiz);
  return (
    <div>
      <Header />
      <div className="main-content">
        {thema.length === 0 ?
          <ThemesList /> : <ThemaQuiz />
        }
      </div>
    </div>
  );
}

export default App;
