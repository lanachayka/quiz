import { combineReducers, createStore } from "redux";
import quizReducer from "./quizReducer";

const reducers = combineReducers({
    quiz: quizReducer,
});

const store = createStore(reducers);

export default store;