import { CREATE_REVIEW, GET_ALLREVIEWS_PRODUCT, DELETE_REVIEW, UPDATE_REVIEW } from "./../type";

const initial = {
    createReview: [],
    allReviewProduct: [],
    deleteReview: [],
    updateReview: [],
    };

const ReviewReducer = (state = initial, action) => {

    switch (action.type) {

        case CREATE_REVIEW:
            return {
                ...state,
                createReview: action.payload,
            }

        case GET_ALLREVIEWS_PRODUCT:
            return {
                ...state,
                allReviewProduct: action.payload,
            }
            

        case DELETE_REVIEW:
            return {
                ...state,
                deleteReview: action.payload,
            }
            

        case UPDATE_REVIEW:
            return {
                ...state,
                updateReview: action.payload,
            }
            
    
        default:
            return state;
    }
}

export default ReviewReducer;
