import React, { useEffect, useState } from "react";
import Joi from "joi";
import notify from "./../Utils/useNotification";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../../Redux/actions/authAction";

const LoginHook = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    
    const [loading, setLoading] = useState(true);
    const [errorList, setErrorList] = useState([]);
    
    const dispatch = useDispatch()
    // const navigate = useNavigate()


    const handleOnChange = (e) => {
        let myUser = { ...user };
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
    };

    const validateForm = () => {
        const schema = Joi.object({
        email: Joi.string()
            .required()
            .email({ tlds: { allow: ["com", "net"] } }),
        password: Joi.string().required()
        });
        return schema.validate(user, { abortEarly: false });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let validationResult = validateForm();
        if (validationResult.error) {
        setErrorList(validationResult.error.details);
        } else {
    
        // call api
        dispatch(loginUser(user))
        setLoading(false)
        }
    };

    useEffect(() => {
        errorList.map((error)=> notify(`${error.message}`, 'error'))
        setErrorList([])
    }, [errorList])

    const loginUserResponse = useSelector(state=> state.AuthReducer.loginUser.data)

    useEffect(() => {
        if (loading === false) {
            if (loginUserResponse) {
                if (loginUserResponse.token) {
                    localStorage.setItem('token', loginUserResponse.token)
                    localStorage.setItem('user', JSON.stringify(loginUserResponse.data))
                    notify("Login successful", "success");
                    setUser({
                        email: "",
                        password: ""
                    })
                    setTimeout(() => {
                        // navigate('/')
                        window.location.href = '/'
                    }, 1500);
                    setLoading(true)
                } else {
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                }
                if (loginUserResponse.message) {
                    notify(`${loginUserResponse.message}`, "warn");
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                    setLoading(true)
                    
                }
            }
        }
    }, [loginUserResponse])

    
    
  return [ handleOnChange, handleSubmit, user, loading ];
};

export default LoginHook;
