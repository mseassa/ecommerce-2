
import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import categoryReducer from "./categoryReducer";
import productsReducer from './productsReducer';
import ReviewReducer from './reviewReducer';
import subcategoryReducer from './subcategoryReducer';
import VendorReducer from './vendorReducer';
import WishListReducer from './WishListReducer';


export default combineReducers({
    allCategory: categoryReducer,
    allVendors: VendorReducer,
    subcategory: subcategoryReducer,
    products: productsReducer,
    AuthReducer: AuthReducer,
    ReviewReducer: ReviewReducer,
    WishListReducer: WishListReducer,
});

