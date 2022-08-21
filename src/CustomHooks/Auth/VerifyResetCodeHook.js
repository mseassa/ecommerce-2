import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { forgotPassword, verifyCode } from '../../Redux/actions/authAction';
import notify from '../Utils/useNotification';

const VerifyResetCodeHook = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOnChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (code === "") {
        notify("Please enter code", "error")
        return
    }
    // localStorage.setItem("user-email" ,email)
    // setLoading(false)
    await dispatch(verifyCode({
        "resetCode": code
    }))
    setLoading(false)
  }

  const response = useSelector(state=> state.AuthReducer.verifyCode.data)

  useEffect(() => {
    if (loading === false) {
        if (response) {
            if (response.status === "Success") {
              notify(`Reset Code Confirmed`, "success")
              // localStorage.removeItem("user-email" ,email)
              setCode('')
              setLoading(true)
              setTimeout(() => {
                navigate('/resetpaswword')
              }, 1000);
            }
            if (response.status === "fail") {
              notify(`${response.message}`, "warn")
              setCode('')
              setLoading(true)
              // navigate()
        }
    }
  }
  }, [loading])
  
  return [ handleOnChange, handleSubmit, loading, code ]
};

export default VerifyResetCodeHook;
