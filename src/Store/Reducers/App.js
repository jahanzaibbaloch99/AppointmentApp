const initialState = {
  region: {
    latitude: 24.8532,
    longitude: 67.0167,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  appointments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        region: action.payload,
      };
    case 'SET_APPOINTMENT':
      return {
        ...state,
        appointments: {
          ...state.appointments,
          ...action.payload,
        },
      };
    case 'LOG_OUT':
      return {
        ...initialState,
      };
      break;
    default:
      return state;
  }
};

export default reducer;
