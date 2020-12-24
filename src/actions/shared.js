import { getInitialData } from "../utils/helper";
import { receiveUsers } from "./users";
import { recieveQuestions } from "./questions"
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = null;

export function handleInitialData() {
    return dispatch => {
        dispatch(showLoading())
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(recieveQuestions(questions));
            dispatch(setAuthedUser(AUTHED_ID));
            dispatch(hideLoading())
        });
    }
}