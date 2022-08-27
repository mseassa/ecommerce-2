import { ADD_PRODUCT_WISHLIST, DELETE_PRODUCT_WISHLIST, USER_WISHLIST } from '../type';

const initial = {
    addWishList: [],
    deleteWishList: [],
    loggedUserWidshList: [],
}


const WishListReducer = (state=initial, action) => {

    switch (action.type) {

        case ADD_PRODUCT_WISHLIST:
            return {
                ...state,
                addWishList: action.payload,
            }

        case DELETE_PRODUCT_WISHLIST:
            return {
                ...state,
                deleteWishList: action.payload,
            }

        case USER_WISHLIST:
            return {
                ...state,
                loggedUserWidshList: action.payload,
            }

    
        default:
            return state;
    }
}


export default WishListReducer