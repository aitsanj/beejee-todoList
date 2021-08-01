import { push } from "connected-react-router";
import { axiosApi } from "../../axios-api";

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const SAVE_USERNAME = 'SAVE_USERNAME';
export const LOGOUT_USER = 'LOGOUT_USER';

const loginUserSuccess = (token, username) => ({type: LOGIN_USER_SUCCESS, token, username});

const loginUserFail = (error) => ({type: LOGIN_USER_FAIL, error});


export const loginUser = (userForm, userData) => {
    return async dispatch => {
        try {
            const response = await axiosApi.post(`/login?developer=sanzhar`, userForm, {headers: {'Content-Type': 'multipart/form-data'}});
            dispatch(loginUserSuccess(response.data, userData));
            dispatch(push("/"));
        } catch (e) {
            dispatch(loginUserFail('error'));
        }
    };
};

