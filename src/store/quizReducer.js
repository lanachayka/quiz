import { quiz } from "../data/quiz";

const initialState = {
    quiz: quiz,
    userAnswer: '',
    userResult: ''
}

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default quizReducer;