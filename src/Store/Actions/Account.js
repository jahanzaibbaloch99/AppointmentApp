export const setUserData = payload => {
  console.log(payload, 'PAYLOAD');
  return {
    type: 'SET_USER',
    payload: payload,
  };
};
