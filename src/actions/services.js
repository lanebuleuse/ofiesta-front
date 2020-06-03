export const SAVE_SERVICES = 'SAVE_SERVICES';
export const FETCH_SERVICES = 'FETCH_SERVICES';

export const FETCH_SERVICE_INFO = 'FETCH_SERVICE_INFO';
export const SAVE_SERVICE_INFO = 'SAVE_SERVICE_INFO';

export const RETRIEVE_LOCATION = 'RETRIEVE_LOCATION';

export const fetchServices = () => ({
  type: FETCH_SERVICES,
});
export const saveServices = (services) => ({
  type: SAVE_SERVICES,
  services,
});

export const fetchServiceInformation = (id) => ({
  type: FETCH_SERVICE_INFO,
  id,
});
export const saveServiceInformation = (data, lat, lng) => ({
  type: SAVE_SERVICE_INFO,
  data,
  lat,
  lng,
});

export const retrieveLocation = (data) => ({
  type: RETRIEVE_LOCATION,
  data,
});
