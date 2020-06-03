export const RETRIEVE_LOCATION = 'RETRIEVE_LOCATION';
export const SAVE_LOCATION = 'SAVE_LOCATION';
export const FETCH_USER_INFO = 'FETCH_USER_INFO';

export const retrieveLocation = (address) => ({
  type: RETRIEVE_LOCATION,
  address,
});

export const saveLocation = (lat, lng) => ({
  type: SAVE_LOCATION,
  lat,
  lng,
});

export const fetchUserInformation = (id) => ({
  type: FETCH_USER_INFO,
  id,
});