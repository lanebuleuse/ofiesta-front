// action types
export const SAVE_CONNECTION_INFO = 'SAVE_CONNECTION_INFO';
export const FETCH_MEMBER = 'FETCH_MEMBER';
export const SAVE_MEMBER = 'SAVE_MEMBER';

export const saveConnectionInfo = (role, userid) => ({
  type: SAVE_CONNECTION_INFO,
  role,
  userid,
});

export const fetchMemberinformation = (userId, token) => ({
  type: FETCH_MEMBER,
  userId,
  token,
});

export const saveMemberInformation = (data) => ({
  type: SAVE_MEMBER,
  data,
});

