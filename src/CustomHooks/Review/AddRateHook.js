import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import notify from '../Utils/useNotification'
import { createReview } from './../../Redux/actions/reviewAction';

const AddRateHook = (id) => {
    const dispatch = useDispatch()
    const [rateText, setRateText] = useState('')
    const [rateValue, setRateValue] = useState('')

    const [loading, setLoading] = useState(true)

    const onChangeRateText = (event) => {
        setRateText(event.target.value)
    }

    const onChangeRateValue = (rateVal) => {
        setRateValue(rateVal)


    }

    var user
    if (localStorage.getItem('user') !== null) {
    var user = JSON.parse(localStorage.getItem('user'))
}

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(rateText === '' || rateValue < 1) {
            notify('Please Write a comment & Rate over 1', 'error')
            return
        }

        await dispatch(createReview(id, {
            review: rateText,
            rating: rateValue
        }))
        setLoading(false)

    }
    const response = useSelector(state=> state.ReviewReducer.createReview)
    useEffect(() => {
        if (loading === false) {
            if (response) {
                if (response.status && response.status === 403) {
                    notify('You are not allowed as admin to perform this action', 'error')
                } else if (response.data.errors && response.data.errors[0].msg === 'You already added review on this product') {
                    notify('You already added review on this product', 'error')
                } else if (response.status && response.status === 201) {
                    notify('Review added successfuly', 'success')
                    setTimeout(() => {
                        window.location.reload(false)
                    }, 1000);
                }
            }
        }

    }, [loading])
    
  return [ user, onChangeRateText, onChangeRateValue, rateText, rateValue, handleSubmit ]
}

export default AddRateHook