import { SAVE_LOCATION } from 'src/actions/googlemap';

const initialState = {
  // ici l'état initial
  center: {
    lat: null,
    lng: null,
  },
  zoom: 11,
};

const googlemapReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_LOCATION:
      return {
        ...state,
        lat: action.lat,
        lng: action.lng,
      };
    default: return state;
  }
};

export default googlemapReducer;
