import { useInsertData } from "../../hooks/useInsertData"
import { useUpdatetData } from "../../hooks/useUpdateData";
import { CREATE_NEW_USER, GET_ERROR, LOGIN_USER, GET_LOGIN_USER, FORGOT_PASSWORD, VERIFY_CODE_PASSWORD, RESET_PASSWORD } from "../type"
import { useGetData } from './../../hooks/useGetData';


// to Create new user
export const createNewUser = (data)=> async (dispatch) => {

    try {

        const response = await useInsertData(`/api/v1/auth/signup`, data)
        dispatch({
            type: CREATE_NEW_USER,
            payload: response,
            loading: true
        })

    } catch (error) {
        dispatch({
            type: CREATE_NEW_USER,
            payload: error.response,
        })
    }
}

// to log in
export const loginUser = (data)=> async (dispatch) => {

    try {

        const response = await useInsertData(`/api/v1/auth/login`, data)
        dispatch({
            type: LOGIN_USER,
            payload: response,
        })

    } catch (error) {
        dispatch({
            type: LOGIN_USER,
            payload: error.response,
        })
    }
}

// forgot Password
export const forgotPassword = (data)=> async (dispatch) => {

    try {

        const response = await useInsertData(`/api/v1/auth/forgotPasswords`, data)
        dispatch({
            type: FORGOT_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD,
            payload: error.response,
        })
    }
}

// verify code
export const verifyCode = (data)=> async (dispatch) => {

    try {

        const response = await useInsertData(`/api/v1/auth/verifyResetCode`, data)
        dispatch({
            type: VERIFY_CODE_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (error) {
        dispatch({
            type: VERIFY_CODE_PASSWORD,
            payload: error.response,
        })
    }
}

// Reset Password
export const resetPassword = (data)=> async (dispatch) => {

    try {

        const response = await useUpdatetData(`/api/v1/auth/resetPassword`, data)
        dispatch({
            type: RESET_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (error) {
        dispatch({
            type: RESET_PASSWORD,
            payload: error.response,
        })
    }
}
