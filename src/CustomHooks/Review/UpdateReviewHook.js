import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteReview, updateReview } from "../../Redux/actions/reviewAction";
import notify from './../Utils/useNotification';

const UpdateReviewHook = (item) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [newReviewText, setNewReviewText] = useState(item.review)
    const [newReviewRate, setNewReviewRate] = useState(item.rating)

    const [showEdit, setShowEdit] = useState(false);
    const [loading, setLoading] = useState(true)

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const onChangeReviewText =(event) => {
        setNewReviewText(event.target.value)
    }
    const onChangeRateValue =(rateVal) => {
        setNewReviewRate(rateVal)
    }

    const handleEdit = async () => {
        if(newReviewText === '' || newReviewRate < 1) {
            notify('Please Write a comment & Rate over 1', 'error')
            return
        }
        await dispatch(updateReview(item._id, {
            review: newReviewText,
            rating: newReviewRate
        }));
        setShowEdit(false);
        setLoading(false)
    };
    const response = useSelector(state=> state.ReviewReducer.updateReview)

    useEffect(() => {
        if(loading === false) {
            if (response.status && response.status === 200) {
                notify('Review updated successfuly', 'success')
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            } else {
                notify('Review updating has a problem', 'error')
            }
        }
    }, [loading])

    

    return [showEdit, handleCloseEdit, handleShowEdit, handleEdit, onChangeReviewText, newReviewText, onChangeRateValue, newReviewRate];
};

export default UpdateReviewHook;
