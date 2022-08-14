
import { combineReducers } from 'redux';
import categoryReducer from "./categoryReducer";
import productsReducer from './productsReducer';
import subcategoryReducer from './subcategoryReducer';
import VendorReducer from './vendorReducer';


export default combineReducers({
    allCategory: categoryReducer,
    allVendors: VendorReducer,
    subcategory: subcategoryReducer,
    products: productsReducer,
});

