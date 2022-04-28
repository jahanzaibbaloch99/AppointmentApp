const initialState = {
    user: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }
        case "LOG_OUT":
            return {
                ...initialState,
            };
            break;
        default:
            return state;
    }
};

export default reducer;
