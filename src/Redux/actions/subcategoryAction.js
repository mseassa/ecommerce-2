import { useGetData } from "../../hooks/useGetData"
import { useInsertData } from "../../hooks/useInsertData"
import { CREATE_SUBCATEGORY, GET_SUBCATEGORY, GET_ERROR } from "../type"



// to Create SubCategory
export const createSubCategory = (data)=> async (dispatch) => {

    try {

        const response = await useInsertData(`/api/v1/subcategories`, data)
        dispatch({
            type: CREATE_SUBCATEGORY,
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
// to get SubCategory depend on category ID
export const getOneCategory = (id)=> async (dispatch) => {

    try {

        const response = await useGetData(`/api/v1/categories/${id}/subcategories`)
        dispatch({
            type: GET_SUBCATEGORY,
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