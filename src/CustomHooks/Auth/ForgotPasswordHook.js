import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { forgotPassword } from './../../Redux/actions/authAction';
import notify from './../Utils/useNotification';

const ForgotPasswordHook = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOnChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (email === "") {
        notify("Please insert email", "error")
        return
    }
    localStorage.setItem("user-email" ,email)
    // setLoading(false)
    await dispatch(forgotPassword({
        "email": email
    }))
    setLoading(false)
  }

  const response = useSelector(state=> state.AuthReducer.forgotPassword.data)

  useEffect(() => {
    if (loading === false) {
        if (response) {
            if (response.status === "Success") {
              notify(`${response.message}`, "success")
              setEmail('')
              setLoading(true)
              setTimeout(() => {
                navigate('/verifyresetcode')
              }, 1000);
            }
            if (response.status === "fail") {
              notify(`${response.message}`, "warn")
              setEmail('')
              setLoading(true)
              // navigate()
        }
    }
  }
  }, [loading])
  
  return [ handleOnChange, handleSubmit, loading, email ]
};

export default ForgotPasswordHook;
