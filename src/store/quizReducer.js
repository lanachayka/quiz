import { quiz } from "../data/quiz";
import { actionTypes } from "./actionTypes";


const initialState = {
    quiz: quiz,
    thema: '',
    userAnswer: '',
    userResult: ''
}

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.CHOOSE_THEMA): {
            return {...state, thema: action.payload}
        }
        default: return state
    }
}

export default quizReducer;