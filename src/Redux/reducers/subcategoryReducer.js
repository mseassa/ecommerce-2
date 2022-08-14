import {  GET_ERROR, CREATE_SUBCATEGORY, GET_SUBCATEGORY } from './../type';

const initial = {
    subcategory: [],
    loading: true,
}


const subcategoryReducer = (state=initial, action) => {

    switch (action.type) {

        case CREATE_SUBCATEGORY:
            return {
                ...state,
                subcategory: action.payload,
                loading: false,
            }

        case GET_SUBCATEGORY:
            return {
                ...state,
                subcategory: action.payload,
                loading: false,
            }

        case GET_ERROR:
            return {
                ...state,
                subcategory: action.payload,
                loading: true,
            }
    
        default:
            return state;
    }
}

export default subcategoryReducer