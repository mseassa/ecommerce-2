import useDeleteData from "../../hooks/useDeleteData"
import { useGetDataToken } from "../../hooks/useGetData"
import { useInsertData } from "../../hooks/useInsertData"
import { ADD_PRODUCT_WISHLIST, DELETE_PRODUCT_WISHLIST, USER_WISHLIST } from "../type"



// to add product to wishList
export const addToWishList = (body)=> async (dispatch) => {

    try {

        const response = await useInsertData(`/api/v1/wishlist`, body)
        dispatch({
            type: ADD_PRODUCT_WISHLIST,
            payload: response,
        })

    } catch (error) {
        dispatch({
            type: ADD_PRODUCT_WISHLIST,
            payload: error.response,
        })
    }
}

// to delete product to wishList
export const deleteFromWishList = (id)=> async (dispatch) => {

    try {

        const response = await useDeleteData(`/api/v1/wishlist/${id}`)
        dispatch({
            type: DELETE_PRODUCT_WISHLIST,
            payload: response,
        })

    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_WISHLIST,
            payload: error.response,
        })
    }
}

// to get all wishlist products of logged user
export const getLoggedUserWishList = ()=> async (dispatch) => {

    try {

        const response = await useGetDataToken(`/api/v1/wishlist`)
        dispatch({
            type: USER_WISHLIST,
            payload: response,
        })

    } catch (error) {
        dispatch({
            type: USER_WISHLIST,
            payload: error.response,
        })
    }
}

