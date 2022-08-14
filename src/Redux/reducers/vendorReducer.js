import { GET_ALL_VENDORS, GET_ERROR, CREATE_VENDOR } from '../type';

const initial = {
    vendor: [],
    loading: true,
}


const VendorReducer = (state=initial, action) => {

    switch (action.type) {

        case GET_ALL_VENDORS:
            return {
                ...state,
                vendor: action.payload,
                loading: false,
            }

        case CREATE_VENDOR:
            return {
                ...state,
                vendor: action.payload,
                loading: false,
            }

        case GET_ERROR:
            return {
                ...state,
                vendor: action.payload,
                loading: true,
            }
    
        default:
            return state;
    }
}


export default VendorReducer