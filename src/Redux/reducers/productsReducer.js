import { GET_ERROR, CREATE_PRODUCT, GET_ALL_PRODUCTS, GET_PRODUCT_DETAILS, GET_PRODUCTS_LIKE, DELETE_PRODUCT, UPDATE_PRODUCT } from './../type';

const initial = {
    products: [],
    allProducts: [],
    productDetails: [],
    productsLike: [],
    deleteProduct: [],
    updatedProduct:[],
    loading: true,
}


const productsReducer = (state=initial, action) => {

    switch (action.type) {

        case CREATE_PRODUCT:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }

        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                loading: false,
            }

        case GET_PRODUCT_DETAILS:
            return {
                ...state,
                productDetails: action.payload,
                loading: false,
            }

        case GET_PRODUCTS_LIKE:
            return {
                ...state,
                productsLike: action.payload,
                loading: false,
            }

        case DELETE_PRODUCT:
            return {
                ...state,
                deleteProduct: action.payload,
                loading: false,
            }

        case UPDATE_PRODUCT:
            return {
                ...state,
                updatedProduct: action.payload,
                loading: false,
            }

        case GET_ERROR:
            return {
                ...state,
                products: action.payload,
                loading: true,
            }
    
        default:
            return state;
    }
}

export default productsReducer