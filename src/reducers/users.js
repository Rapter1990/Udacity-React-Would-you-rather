import { RECEIVE_USERS } from "../constants/Constants";
import { ANSWER_QUESTION, CREATE_QUESTION } from "../constants/Constants";

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