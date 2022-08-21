import useDeleteData from "../../hooks/useDeleteData"
import { useGetData } from "../../hooks/useGetData"
import { useInsertDataWithImage } from "../../hooks/useInsertData"
import { useUpdateDataWithImage } from "../../hooks/useUpdateData"
import { CREATE_PRODUCT, GET_ALL_PRODUCTS, GET_ERROR, GET_PRODUCT_DETAILS, GET_PRODUCTS_LIKE, DELETE_PRODUCT, UPDATE_PRODUCT } from "../type"



// to Create Product
export const createProduct = (formatData)=> async (dispatch) => {

    try {

        const response = await useInsertDataWithImage(`/api/v1/products`, formatData)
        dispatch({
            type: CREATE_PRODUCT,
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

// to get all products
export const getAllProducts = (limit)=> async (dispatch) => {

    try {

        const response = await useGetData(`/api/v1/products?limit=${limit}`)
        dispatch({
            type: GET_ALL_PRODUCTS,
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
// to get all products with page
export const getAllProductsWithPage = (page, limit)=> async (dispatch) => {

    try {

        const response = await useGetData(`/api/v1/products?page=${page}&limit=${limit}`)
        dispatch({
            type: GET_ALL_PRODUCTS,
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

// to get all products with Query String
export const getAllProductsSearch = (queryString)=> async (dispatch) => {

    try {

        const response = await useGetData(`/api/v1/products?${queryString}`)
        dispatch({
            type: GET_ALL_PRODUCTS,
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

// to get one product with id
export const getOneProduct = (id)=> async (dispatch) => {

    try {

        const response = await useGetData(`/api/v1/products/${id}`)
        dispatch({
            type: GET_PRODUCT_DETAILS,
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

// to get product like
export const getProductsLike = (id)=> async (dispatch) => {

    try {

        const response = await useGetData(`/api/v1/products?category=${id}`)
        dispatch({
            type: GET_PRODUCTS_LIKE,
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

// to delete product with id
export const deleteProduct = (id)=> async (dispatch) => {

    try {

        const response = await useDeleteData(`/api/v1/products/${id}`)
        dispatch({
            type: DELETE_PRODUCT,
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

// to update product with id
export const updateProduct = (id, formData)=> async (dispatch) => {

    try {

        const response = await useUpdateDataWithImage(`/api/v1/products/${id}`, formData)
        dispatch({
            type: UPDATE_PRODUCT,
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