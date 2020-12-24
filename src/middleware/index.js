import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import logger from './logger';

/**
 * @description Applying middleware to show all logging results via thunk which returns dispatch fetching data from an API  
 */
export default applyMiddleware(
  thunk,
  logger,
);