import { LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGOUT_USER, SAVE_USERNAME } from "../actions/user-actions";

const initialState = {
    status: '',
    token: '',
    username:'',
};

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case LOGIN_USER_SUCCESS:
            console.log(action);
            return {...state, status: action.token.status, token: action.token.message.token, username: action.username.username};
        case LOGIN_USER_FAIL:
            return {...state, status: action.error};
        case LOGOUT_USER:
            localStorage.removeItem('users');
            localStorage.clear();
            return {...state, status: '', token: ''};
        default:
            return state;
    };
};

export default userReducer;