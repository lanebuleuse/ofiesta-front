import { combineReducers } from 'redux';

// We import the different Reducer

import authReducer from './auth';
import authPrestaReducer from './authPresta';
import contactPrestaReducer from './contactPresta';
import userReducer from './user';
import newUserReducer from './newUser';
import newUserProReducer from './newUserPro';
import servicesReducer from './services';
import searchReducer from './search';

// on définit le reducer principal, qui combine les autres
const rootReducer = combineReducers({

  auth: authReducer,
  authPresta: authPrestaReducer,
  contactPresta: contactPrestaReducer,
  user: userReducer,
  newUser: newUserReducer,
  newUserPro: newUserProReducer,
  services: servicesReducer,
  search: searchReducer,
});

// pour accéder au state défini dans le reducer 'recipesReducer', il faudra que je
// descende dans le tiroir 'recipes' => state.recipes.xxxxx

export default rootReducer;
