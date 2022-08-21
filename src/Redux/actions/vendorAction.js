import { GET_ALL_VENDORS, GET_ERROR, CREATE_VENDOR } from './../type';
import { useGetData } from './../../hooks/useGetData';
import { useInsertDataWithImage } from '../../hooks/useInsertData';

// to get All Vendors
export const getAllVendors = (limit)=> async (dispatch) => {

    try {

        const response = await useGetData(`/api/v1/brands?limit=${limit}`)
        dispatch({
            type: GET_ALL_VENDORS,
            payload: response,
        })

    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `error ${error}`,
        })
    }
}

// to get all vendors Page
export const getAllVendorPage = (page)=> async (dispatch) => {

    try {

        const response = await useGetData(`/api/v1/brands?limit=6&page=${page}`)
        dispatch({
            type: GET_ALL_VENDORS,
            payload: response,
        })

    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `error ${error}`,
        })
    }
}

// to Create vendor
export const createVendor = (formData)=> async (dispatch) => {

    try {

        const response = await useInsertDataWithImage(`/api/v1/brands`, formData)
        dispatch({
            type: CREATE_VENDOR,
            payload: response,
            loading: true
        })

    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `error ${error}`,
        })
    }
}
