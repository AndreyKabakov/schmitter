import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions.js";
const initialUserState = {
    name: '',
    avatar: ''
};
export const userReducer = (state=initialUserState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, name: action.payload || state.name};

        case CHANGE_AVATAR:
            return {...state, avatar: action.payload || state.avatar};

        default:
            return state;
    }
}