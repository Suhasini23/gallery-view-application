import * as CONST from "../comman/actionTypes";

const initialState = {
    actions: {},
    randomData: []
};

export const mainReducer = (
    state = initialState,
    action: any
) => {
    switch (action.type) {
        case CONST.SHOW_LOADER: {
            return { ...state, loading: true };
        }
        case CONST.HIDE_LOADER: {
            return { ...state, loading: false };
        }
        case CONST.SET_DATA: {
            return {
                ...state,
                randomData: [...state.randomData, ...action.payload]
            };
        }
        default:
            return state;
    }
};

export default mainReducer;
