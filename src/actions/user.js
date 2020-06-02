// action types
export const SAVE_CONNECTION_INFO = 'SAVE_CONNECTION_INFO';

export const saveConnectionInfo = (role, userid) => ({
  type: SAVE_CONNECTION_INFO,
  role,
  userid,
});
