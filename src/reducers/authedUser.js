import { SET_AUTHED_USER, LOGOUT_USER } from "../constants/Constants";

/**
 * @description Handle authedUser process in terms of action type
 * @param {object} state Defined State 
 * @param {object} action Defined action type (SET_AUTHED_USER and LOGOUT_USER )
 */
export default function authedUser(state = null, action) {
    switch(action.type) {
        case SET_AUTHED_USER:
            return action.id;
        case LOGOUT_USER:
            return null;
        default:
            return state;        
    }
}