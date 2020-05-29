import { } from 'src/actions/service';


const initialState = {
  // Initial State
  listSrvice: [],
  title: 'DJ Fire',
  address: '50 Rue de la rue',
  postalCode: '75000',
  city: 'Paris',
  department: '75',
  price: '450',
  note: '4',
  minGuest: '10',
  maxGuest: '300',
  media: [],
};

const serviceReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

export default serviceReducer;
