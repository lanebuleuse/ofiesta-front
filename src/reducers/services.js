import { SAVE_SERVICES, SAVE_SERVICE_INFO } from 'src/actions/services';


const initialState = {
  // Initial State
  listServices: [],
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

    case SAVE_SERVICE_INFO:
      console.log(action.data.ServicesList);
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
    default: return state;
  }
};

export default servicesReducer;
