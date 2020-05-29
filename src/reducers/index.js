import { combineReducers } from 'redux';

// We import the different Reducer
/* import administrationReducer from './administration'; */
import userReducer from './user';
import newUserReducer from './newUser';
import servicesReducer from './services';

// on définit le reducer principal, qui combine les autres
const rootReducer = combineReducers({

  /* administration: administrationReducer, */
  user: userReducer,
  newUser: newUserReducer,
  services: servicesReducer,
});

// pour accéder au state défini dans le reducer 'recipesReducer', il faudra que je
// descende dans le tiroir 'recipes' => state.recipes.xxxxx

export default rootReducer;
