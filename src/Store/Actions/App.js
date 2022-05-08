export const setMapCoOrinates = payload => {
  return {
    type: 'SET_LOCATION',
    payload: payload,
  };
};

export const setAppointments = payload => {
  return {
    type: 'SET_APPOINTMENT',
    payload: payload,
  };
};
