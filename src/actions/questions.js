import { saveQuestion, saveQuestionAnswer } from "../utils/helper";
import { RECEIVE_QUESTIONS ,ANSWER_QUESTION,CREATE_QUESTION } from "../constants/Constants";
import { showLoading, hideLoading } from 'react-redux-loading';


/**
 * @description Fills all questions into store by getting questions object fetched from API
 * @param {object} questions
 */
export function recieveQuestions(questions) {
    return {
      type: RECEIVE_QUESTIONS,
      questions,
    };
  }

/**
 * @description Creates question putting into the store
 * @param {object} question - Question object returning as a response from API
 */
function createQuestion(question, authedUser) {
    return {
        type: CREATE_QUESTION,
        question,
        authedUser
    }
}  

/**
 * @description Answers question as a modified answer putting into the store
 * @param {string} authedUser - authedUser variable from question object
 * @param {string} qid - questionid variable from question object
 * @param {string} answer - answer variable from question object
 */
function answerQuestion ({ authedUser, qid, answer }) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}

/**
 * @description Creates a new question on backend side by communicating with API and put into store
 * @param {string} optionOneText - Option one text of question
 * @param {string} optionTwoText - Option two text of question
 */
export function handleCreateQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {

        /** TODO : Get authedUser from combineReducer via getState() */
        const { authedUser } = getState()

        dispatch(showLoading())

        const questionInfo = {
            author: authedUser,
            optionOneText,
            optionTwoText
        }

        return saveQuestion(questionInfo)
            .then((question) => {
                    dispatch(createQuestion(question, authedUser))
                }
            )
            .catch((error) => {
                    console.warn("ERROR --> handleCreateQuestion : ", error);
                    alert("ERROR : Adding your question to the database")
                }
            )
            .finally(() => {
                    dispatch(hideLoading());
                }
            );
    }
}

/**
 * @description Answer a question on backend side by communicating with API and put into store 
 * @param {string} qid  - Question ID
 * @param {string} answer - Answer of question ( optionOne , optionTwo)
 */
export function handleAnswerQuestion({qid, answer}) {

    return (dispatch, getState) => {

        dispatch(showLoading());

        const { authedUser } = getState()

        return saveQuestionAnswer({
          authedUser,
          qid,
          answer,
        })
          .then(() => {
            dispatch(
              answerQuestion({
                authedUser,
                qid,
                answer,
              })
            );
          })
          .catch((error) => {
                console.warn("ERROR --> handleAnswerQuestion : ", error);
                alert("ERROR : Adding your question to the database")
            }
          )
          .finally(() => {
                dispatch(hideLoading());
            }
          );
    };
}