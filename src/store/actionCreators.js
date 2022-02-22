import { actionTypes } from "./actionTypes"

export const chooseThema = (thema) => {
    return {
        type: actionTypes.CHOOSE_THEMA,
        payload: thema
    }
}

export const correctAnswer = () => {
    return {
        type: actionTypes.CORRECT_ANSWER,
    }
}

export const endQuiz = () => {
    return {
        type: actionTypes.END_QUIZ,
    }
}

export const startQuiz = () => {
    return {
        type: actionTypes.START_QUIZ,
    }
}