// action types
export const SAVE_CONNECTION_INFO = 'SAVE_CONNECTION_INFO';
export const FETCH_MEMBER = 'FETCH_MEMBER';
export const SAVE_MEMBER = 'SAVE_MEMBER';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const UPDATE_MEMBER = 'UPDATE_MEMBER';
export const CHECK_USER_CONNECT = 'CHECK_USER_CONNECT';
export const CONNECT_USER = 'CONNECT_USER';
export const DISCONNECT_USER = 'DISCONNECT_USER';


export const saveConnectionInfo = (role, userid) => ({
  type: SAVE_CONNECTION_INFO,
  role,
  userid,
});

export const fetchMemberinformation = (userId, token) => ({
  type: FETCH_MEMBER,
});

export const saveMemberInformation = (data) => ({
  type: SAVE_MEMBER,
  data,
});

export const changeField = (newValue, identifier) => ({
  type: CHANGE_FIELD,
  newValue,
  identifier,
});

export const handleUpdateMember = () => ({
  type: UPDATE_MEMBER,
});

export const checkUserConnected = () => ({
  type: CHECK_USER_CONNECT,
});

export const connectUser = () => ({
  type: CONNECT_USER,
});

export const disconnectUser = () => ({
  type: DISCONNECT_USER,
});
