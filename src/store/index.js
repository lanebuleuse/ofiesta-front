import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import userMiddleware from 'src/middlewares/userMiddleware';
import newUserMiddleware from 'src/middlewares/newUserMiddleware';
import newPrestaMiddleware from 'src/middlewares/newPrestaMiddleware';
import servicesMiddleware from 'src/middlewares/servicesMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import authPrestaMiddleware from 'src/middlewares/authPrestaMiddleware';
import searchMiddleware from 'src/middlewares/searchMiddleware';
import proMiddleware from 'src/middlewares/proMiddleware';

import reducer from 'src/reducers/';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    servicesMiddleware,
    authMiddleware,
    authPrestaMiddleware,
    userMiddleware,
    proMiddleware,
    newUserMiddleware,
    newPrestaMiddleware,
    searchMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,

);

export default store;
