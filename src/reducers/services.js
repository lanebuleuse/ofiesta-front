import { SAVE_SERVICES, SAVE_LOCATION } from 'src/actions/services';


const initialState = {
  // Initial State
  listServices: [],
  center: {
    lat: null,
    lng: null,
  },
  zoom: 11,
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

    case SAVE_LOCATION:
      return {
        ...state,
        center: {
          lat: action.lat,
          lng: action.lng,
        },
      };
    default: return state;
  }
};

export default servicesReducer;
