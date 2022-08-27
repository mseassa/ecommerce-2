import useDeleteData from "../../hooks/useDeleteData"
import { useGetDataToken } from "../../hooks/useGetData"
import { useInsertData } from "../../hooks/useInsertData"
import { useUpdatetData } from "../../hooks/useUpdateData"
import { CREATE_REVIEW, GET_ALLREVIEWS_PRODUCT, DELETE_REVIEW, UPDATE_REVIEW } from "../type"



// to Create review
export const createReview = (prodID, body)=> async (dispatch) => {

    try {

        const response = await useInsertData(`/api/v1/products/${prodID}/reviews`, body)
        dispatch({
            type: CREATE_REVIEW,
            payload: response,
        })

    } catch (error) {
        dispatch({
            type: CREATE_REVIEW,
            payload: error.response,
        })
    }
}

// to get all reviews from one product
export const getAllReviewsProduct = (prodID, page, limit)=> async (dispatch) => {

    try {

        const response = await useGetDataToken(`/api/v1/products/${prodID}/reviews?page=${page}&limit=${limit}`)
        dispatch({
            type: GET_ALLREVIEWS_PRODUCT,
            payload: response,
        })

    } catch (error) {
        dispatch({
            type: GET_ALLREVIEWS_PRODUCT,
            payload: error.response,
        })
    }
}

// to delete review
export const deleteReview = (id)=> async (dispatch) => {

    try {

        const response = await useDeleteData(`/api/v1/reviews/${id}`)
        dispatch({
            type: DELETE_REVIEW,
            payload: response,
        })

    } catch (error) {
        dispatch({
            type: DELETE_REVIEW,
            payload: error.response,
        })
    }
}

// to update review
export const updateReview = (id, body)=> async (dispatch) => {

    try {

        const response = await useUpdatetData(`/api/v1/reviews/${id}`, body)
        dispatch({
            type: UPDATE_REVIEW,
            payload: response,
        })

    } catch (error) {
        dispatch({
            type: UPDATE_REVIEW,
            payload: error.response,
        })
    }
}