import { SAVE_SERVICES } from 'src/actions/services';


const initialState = {
  // Initial State
  listServices: [
    /* {
      id: 1,
      title: 'DJ Fire',
      address: '50 rue de la rue',
      postalCode: 75000,
      city: 'Paris',
      department: '75',
      price: 450,
      note: '4',
      minGuest: 10,
      maxGuest: 300,
      createdAt: '2020-05-28T21:44:00+02:00',
      updatedAt: null,
      company: [],
      media: null,
      serviceList: [],
    },
    {
      id: 3,
      title: 'Martin Boucher & Fils Traiteur',
      address: '35 rue du pâté',
      postalCode: 75014,
      city: 'Paris',
      department: '75',
      price: 250,
      note: '2',
      minGuest: 2,
      maxGuest: 50,
      createdAt: '2020-05-28T22:07:59+02:00',
      updatedAt: null,
      company: [],
      media: null,
      serviceList: [],
    },
    {
      id: 4,
      title: 'MISTER GROOVE',
      address: '57 boulevard dansant ',
      postalCode: 13000,
      city: 'Marseille ',
      department: '13',
      price: 310,
      note: '3',
      minGuest: 10,
      maxGuest: 40,
      createdAt: '2020-05-28T22:10:23+02:00',
      updatedAt: null,
      company: [],
      media: null,
      serviceList: [],
    },
    {
      id: 5,
      title: 'AU Bon Gros Bidon',
      address: '78 rue de la graisse',
      postalCode: 30072,
      city: 'Bordeaux',
      department: '33',
      price: 800,
      note: '5',
      minGuest: 10,
      maxGuest: 300,
      createdAt: '2020-05-28T22:13:58+02:00',
      updatedAt: null,
      company: [],
      media: null,
      serviceList: [],
    }, */
  ],
};

const servicesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SERVICES:
      return {
        ...state,
        listServices: action.services,
      };
    default: return state;
  }
};

export default servicesReducer;
