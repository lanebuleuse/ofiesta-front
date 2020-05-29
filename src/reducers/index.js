import { combineReducers } from 'redux';

// We import the different Reducer
/* import administrationReducer from './administration'; */
import userReducer from './user';
import newUserReducer from './newUser';
import serviceReducer from './service';

// on définit le reducer principal, qui combine les autres
const rootReducer = combineReducers({

  /* administration: administrationReducer, */
  user: userReducer,
  newUser: newUserReducer,
  service: serviceReducer,
});

// pour accéder au state défini dans le reducer 'recipesReducer', il faudra que je
// descende dans le tiroir 'recipes' => state.recipes.xxxxx

export default rootReducer;
