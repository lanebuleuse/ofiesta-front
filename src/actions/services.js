export const SAVE_SERVICES = 'SAVE_SERVICES';
export const FETCH_SERVICES = 'FETCH_SERVICES';


export const fetchServices = () => ({
  type: FETCH_SERVICES,
});

export const saveServices = (services) => ({
  type: SAVE_SERVICES,
  services,
});
