import { quiz } from "../data/quiz";
import { actionTypes } from "./actionTypes";


const initialState = {
    quiz: quiz,
    thema: '',
    userResult: 0,
    endQuiz: false,
}

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.CORRECT_ANSWER): {
            return { ...state, userResult: state.userResult + 1 }
        }
        case (actionTypes.END_QUIZ): {
            return { ...state, endQuiz: true }
        }
        case (actionTypes.CHOOSE_THEMA): {
            return {...state, thema: action.payload}
        }
        default: return state
    }
}

export default quizReducer;