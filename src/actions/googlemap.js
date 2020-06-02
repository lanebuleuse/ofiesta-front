export const RETRIEVE_LOCATION = 'RETRIEVE_LOCATION';
export const SAVE_LOCATION = 'SAVE_LOCATION';

export const retrieveLocation = (address) => ({
  type: RETRIEVE_LOCATION,
  address,
});

export const saveLocation = (lat, lng) => ({
  type: SAVE_LOCATION,
  lat,
  lng,
});
