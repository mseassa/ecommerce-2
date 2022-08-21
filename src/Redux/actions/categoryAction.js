import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY, GET_ONE_CATEGORY, GET_SOME_CATEGORY } from './../type';
import { useGetData } from './../../hooks/useGetData';
import { useInsertDataWithImage } from '../../hooks/useInsertData';

// to get All Category
export const getAllCategory = (limit)=> async (dispatch) => {

    try {

        const response = await useGetData(`/api/v1/categories?limit=${limit}`)
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response,
        })

    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `error ${error}`,
        })
    }
}
// to get Some Category
export const getSomeCategory = (limit)=> async (dispatch) => {

    try {

        const response = await useGetData(`/api/v1/categories?limit=${limit}`)
        dispatch({
            type: GET_SOME_CATEGORY,
            payload: response,
        })

    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `error ${error}`,
        })
    }
}

// to get one category 
export const getOneCategory = (id)=> async (dispatch) => {

    try {

        const response = await useGetData(`/api/v1/categories/${id}`)
        dispatch({
            type: GET_ONE_CATEGORY,
            payload: response,
        })

    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `error ${error}`,
        })
    }
}

// to get all category Page
export const getAllCategoryPage = (page)=> async (dispatch) => {

    try {

        const response = await useGetData(`/api/v1/categories?limit=12&page=${page}`)
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response,
        })

    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `error ${error}`,
        })
    }
}

// to Create Category
export const createCategory = (formData)=> async (dispatch) => {

    try {

        const response = await useInsertDataWithImage(`/api/v1/categories`, formData)
        dispatch({
            type: CREATE_CATEGORY,
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
