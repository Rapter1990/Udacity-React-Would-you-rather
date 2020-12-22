import { SET_AUTHED_USER,LOGOUT_USER } from "../constants/Constants";

/**
 * @description Sets the "Authed User" ID within authedUser store
 * @param {string} id
 */
export function setAuthedUser (id) {
    return{
      type: SET_AUTHED_USER,
      id,
    }
}
  
/**
 * @description Remove the "Authed User" from authedUser store
 */
export function logoutUser(){
    return{
      type: LOGOUT_USER,
    }
}