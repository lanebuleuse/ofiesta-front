export const SAVE_SERVICES = 'SAVE_SERVICES';
export const FETCH_SERVICES = 'FETCH_SERVICES';

export const FETCH_SERVICE_INFO = 'FETCH_SERVICE_INFO';
export const SAVE_SERVICE_INFO = 'SAVE_SERVICE_INFO';

export const RETRIEVE_LOCATION = 'RETRIEVE_LOCATION';

export const SAVE_SEARCH = 'SAVE_SEARCH';

export const CHANGE_PAGE_SERVICE = 'CHANGE_PAGE_SERVICE';

export const CLEAR_CURRENT_SERVICE = 'CLEAR_CURRENT_SERVICE';

export const RESET_ACTUAL_PAGE = 'RESET_ACTUAL_PAGE';

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

export const saveSearch = (listOfResult) => ({
  type: SAVE_SEARCH,
  listOfResult,
});

export const changePageService = (page) => ({
  type: CHANGE_PAGE_SERVICE,
  page,
});

export const clearCurrentService = () => ({
  type: CLEAR_CURRENT_SERVICE,
});

export const resetActualPage = () => ({
  type: RESET_ACTUAL_PAGE,
})