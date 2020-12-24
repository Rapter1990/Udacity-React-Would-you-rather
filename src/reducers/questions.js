import { RECEIVE_QUESTIONS ,ANSWER_QUESTION,CREATE_QUESTION } from "../constants/Constants";

/**
 * @description Handle questions process in terms of action type
 * @param {object} state Defined State 
 * @param {object} action Defined action type (RECEIVE_QUESTIONS , ANSWER_QUESTION and CREATE_QUESTION )
 */
export default function questions(state = null, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
              };
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.qid]: {
                        ...state[action.qid],
                        [action.answer]: {
                          ...state[action.qid][action.answer],
                          votes: state[action.qid][action.answer].votes.concat([action.authedUser]) // questions["8xf0y6ziyjabvozdd253nd"]["optionOne"].votes
                  }
                }
              }
        case CREATE_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
              };    
        default:
            return state;        
    }
}