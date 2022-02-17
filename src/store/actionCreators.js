import { actionTypes } from "./actionTypes"

export const chooseThema = (thema) => {
    return {
        type: actionTypes.CHOOSE_THEMA,
        payload: thema
    }
}