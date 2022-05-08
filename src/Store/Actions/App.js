import {store} from '../Index';
export const setMapCoOrinates = payload => {
  return {
    type: 'SET_LOCATION',
    payload: payload,
  };
};

export const setAppointments = payload => {
  const oldStateArr = store.getState().AppReducer.appointments;
  oldStateArr.push(payload);
  return {
    type: 'SET_APPOINTMENT',
    payload: oldStateArr,
  };
};

export const setAppointmentFirebase = payload => {
  return {
    type: 'SET_APPOINTMENT_FIREBASE',
    payload: payload,
  };
};

export const deleteAppointmentStore = id => {
  const oldStateArr = store.getState().AppReducer.appointments;
  const isDeleted = store.getState().AppReducer.isDeleted;
  oldStateArr.filter(ele => ele.id != id);
  return {
    type: 'SET_APPOINTMENT_DELETED',
    payload: {dataArr: oldStateArr, isDeleted: !isDeleted},
  };
};
