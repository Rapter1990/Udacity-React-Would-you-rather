import { RECEIVE_USERS } from "../constants/Constants";

/**
 * @description Fills all users into store by getting users object fetched from API
 * @param {object} users
 */
export function getUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
};