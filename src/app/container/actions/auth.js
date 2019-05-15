import { SUCCESS_LOGIN_USER, FAILED_LOGIN_USER, SUCCESS_SIGNUP_USER, FAILED_SIGNUP_USER, LOGOUT_USER, MODEL_INFO } from '../constants/actions';
import { endpoint } from '../../../config'
import { api } from '../../../core/api'
import axios from 'axios';

const ModelsInfo = (payload) => ({
    type: MODEL_INFO,
    payload
})

export const SuccessLoginUser = (payload) => ({
    type: SUCCESS_LOGIN_USER,
    payload
})

const FailedLoginUser = (payload) => ({
    type: FAILED_LOGIN_USER,
    payload
})

const SuccessSignUpUser = (payload) => ({
    type: SUCCESS_SIGNUP_USER,
    payload
})

const FailedSignUpUser = (payload) => ({
    type: FAILED_SIGNUP_USER,
    payload
})

const Logout = () => ({
    type: LOGOUT_USER
})

export const LogoutUser = () => {
    return dispatch => {
        dispatch(Logout())
        localStorage.clear();
    }
}

export const LocalAuthentication = (payload) => {
    return dispatch => {
        const url = endpoint.signin;
        return new Promise((resolve, reject) => {
            api.post(url, payload).then((res) => {
                localStorage.setItem('token', res.token)
                dispatch(SuccessLoginUser(res.token))
            }, error => {
                dispatch(FailedLoginUser(error.response))
                error.response && alert(error.response.data.error)
            })
        })
    }
}
