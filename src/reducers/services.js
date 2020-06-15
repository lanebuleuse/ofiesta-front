import {
  SAVE_SERVICES,
  SAVE_SERVICE_INFO,
  SAVE_SEARCH,
  CHANGE_PAGE_SERVICE,
  CLEAR_CURRENT_SERVICE,
  RESET_ACTUAL_PAGE,
} from 'src/actions/services';

import { LIST_SERVICE_TO_SEARCH } from 'src/actions/search';

const initialState = {
  // Initial State
  listServices: [],
  actualPage: 1,
  newPage: null,
  numberOPage: '',
  currentService: {
    id: null,
    title: '',
    serviceList: null,
    address: '',
    postalCode: '',
    city: '',
    department: null,
    description: '',
    company: {},
    minGuest: null,
    maxGuest: null,
    note: null,
    price: null,
    media: {},
    center: {
      lat: null,
      lng: null,
    },
    loading: true,
  },
  zoom: 13,
  loading: true,
};

const servicesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SERVICES:
      return {
        ...state,
        listServices: action.services,
        actualPage: action.services.current_page,
        numberOPage: action.services.count_pages,
        loading: false,

      };

    case SAVE_SERVICE_INFO:
      return {
        ...state,
        currentService: {
          id: action.data.id,
          title: action.data.title,
          serviceList: action.data.ServiceList,
          address: action.data.address,
          postalCode: action.data.postalCode,
          city: action.data.city,
          department: action.data.department,
          description: action.data.description,
          company: action.data.company,
          minGuest: action.data.minGuest,
          maxGuest: action.data.maxGuest,
          note: action.data.note,
          price: action.data.price,
          media: action.data.media,
          center: {
            lat: action.lat,
            lng: action.lng,
          },
          loading: false,
        },
      };

    case CHANGE_PAGE_SERVICE:
      console.log(action.page);
      return {
        ...state,
        actualPage: action.page,
      };

    case SAVE_SEARCH:
      console.log('Services Reducer');
      return {
        ...state,
        /* listServices: action.listOfResult, */
      };

    case CLEAR_CURRENT_SERVICE:
      return {
        ...state,
        currentService: {
          id: null,
          title: '',
          serviceList: null,
          address: '',
          postalCode: '',
          city: '',
          department: null,
          description: '',
          company: {},
          minGuest: null,
          maxGuest: null,
          note: null,
          price: null,
          media: {},
          center: {
            lat: null,
            lng: null,
          },
          loading: true,
        },
      };

    case RESET_ACTUAL_PAGE:
      return {
        ...state,
        actualPage: 1,
      };

    default: return state;
  }
};

export default servicesReducer;
