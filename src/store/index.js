import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import userMiddleware from 'src/middlewares/userMiddleware';
import newUserMiddleware from 'src/middlewares/newUserMiddleware';
import servicesMiddleware from 'src/middlewares/servicesMiddleware';

import reducer from 'src/reducers/';


// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    servicesMiddleware,
    userMiddleware,
    newUserMiddleware,
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
