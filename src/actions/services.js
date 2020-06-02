export const SAVE_SERVICES = 'SAVE_SERVICES';
export const FETCH_SERVICES = 'FETCH_SERVICES';
export const RETRIEVE_LOCATION = 'RETRIEVE_LOCATION';
export const SAVE_LOCATION = 'SAVE_LOCATION';

export const fetchServices = () => ({
  type: FETCH_SERVICES,
});

export const saveServices = (services) => ({
  type: SAVE_SERVICES,
  services,
});

export const retrieveLocation = (address) => ({
  type: RETRIEVE_LOCATION,
  address,
});

export const saveLocation = (lat, lng) => ({
  type: SAVE_LOCATION,
  lat,
  lng,
});
