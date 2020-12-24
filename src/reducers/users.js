import { RECEIVE_USERS } from "../constants/Constants";
import { ANSWER_QUESTION, CREATE_QUESTION } from "../constants/Constants";

/**
 * @description Handle user process in terms of action type
 * @param {object} state Defined State 
 * @param {object} action Defined action type (RECEIVE_USERS , ANSWER_QUESTION and CREATE_QUESTION )
 */
export default function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
              };
        case ANSWER_QUESTION:
            return {
				...state,
				[action.authedUser]: {
			    ...state[action.authedUser],
			    answers: {
			      ...state[action.authedUser].answers,
			      [action.qid]: action.answer
			    }
              }
            }
        case CREATE_QUESTION:
            return {
                ...state,
                [action.authedUser]: {
                  ...state[action.authedUser],
                  questions: state[action.authedUser].questions.concat([action.id])
                },
              };
        default:
            return state;            
    }
}