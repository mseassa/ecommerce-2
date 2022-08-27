import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteReview } from "../../Redux/actions/reviewAction";
import notify from './../Utils/useNotification';

const DeleteReviewHook = (id) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        await dispatch(deleteReview(id));
        setShow(false);
        setLoading(false)
    };
    const response = useSelector(state=> state.ReviewReducer.deleteReview)

    useEffect(() => {
        if(loading === false) {
            if (response === '') {
                notify('Review deleted successfuly', 'success')
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            } else {
                notify('Review deleted has a problem', 'error')
            }
        }
    }, [loading])

    

    return [show, handleClose, handleShow, handleDelete];
};

export default DeleteReviewHook;
