import { CREATE_NEW_USER, LOGIN_USER, GET_LOGIN_USER, FORGOT_PASSWORD, VERIFY_CODE_PASSWORD, RESET_PASSWORD } from '../type';

const initial = {
    createUser: [],
    loginUser: [],
    forgotPassword: [],
    verifyCode: [],
    resetPassword: [],
}


const AuthReducer = (state=initial, action) => {

    switch (action.type) {

        case CREATE_NEW_USER:
            return {
                ...state,
                createUser: action.payload,
            }

        case LOGIN_USER:
            return {
                ...state,
                loginUser: action.payload,
            }

        case FORGOT_PASSWORD:
            return {
                ...state,
                forgotPassword: action.payload,
            }

        case VERIFY_CODE_PASSWORD:
            return {
                ...state,
                verifyCode: action.payload,
            }

        case RESET_PASSWORD:
            return {
                ...state,
                resetPassword: action.payload,
            }

    
        default:
            return state;
    }
}


export default AuthReducer