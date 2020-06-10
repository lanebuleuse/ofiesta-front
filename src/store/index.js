import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import servicesMiddleware from 'src/middlewares/servicesMiddleware';
import userMiddleware from 'src/middlewares/userMiddleware';
import newUserMiddleware from 'src/middlewares/newUserMiddleware';
import newUserProMiddleware from 'src/middlewares/newUserProMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import authPrestaMiddleware from 'src/middlewares/authPrestaMiddleware';
import searchMiddleware from 'src/middlewares/searchMiddleware';

import reducer from 'src/reducers/';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    servicesMiddleware,
    userMiddleware,
    newUserMiddleware,
    newUserProMiddleware,
    authMiddleware,
    authPrestaMiddleware,
    searchMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,

);

export default store;
