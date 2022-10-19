import * as ACTION_TYPE from "../Type/Type";

const initailState = {
    is_loading: false,
};

const userReducer = (state = initailState, action) => {
    switch (action.type) {
        case ACTION_TYPE.IS_LOADING: {
            return {
                ...state,
                is_loading: true,
            }
         }
        default:
         return state;
    }
};

export default userReducer;
