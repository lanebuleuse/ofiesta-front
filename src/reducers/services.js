import { SAVE_SERVICES } from 'src/actions/services';


const initialState = {
  // Initial State
  listServices: [],
  loading: false,
};

const servicesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SERVICES:
      return {
        ...state,
        listServices: action.services,
        loading: false,
      };
    default: return state;
  }
};

export default servicesReducer;
