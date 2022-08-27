import React, { useEffect, useState } from "react";
import Joi from "joi";
import notify from "./../Utils/useNotification";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from './../../Redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const RegisterHook = () => {
const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
});

const [loading, setLoading] = useState(true);
const [errorList, setErrorList] = useState([]);

const dispatch = useDispatch()
const navigate = useNavigate()
const createUserResponse = useSelector(state=> state.AuthReducer.createUser.data)

const getFormValue = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
};

const validateForm = () => {
    const schema = Joi.object({
    name: Joi.string().alphanum().required().min(6).max(30),
    email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
    phone: Joi.string().required(),
    password: Joi.string().required(),
    passwordConfirm: Joi.ref("password"),
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
    await dispatch(createNewUser(user))
    setLoading(false)
    }
};

useEffect(() => {
    errorList.map((error)=> notify(`${error.message}`, 'error'))
    setErrorList([])
}, [errorList])


useEffect(() => {
    if (loading === false) {
        if (createUserResponse) {
            if (createUserResponse.token) {
                localStorage.setItem('token', createUserResponse.token)
                notify("Your account is registerd", "success");
                setUser({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                    passwordConfirm: "",
                })
                setTimeout(() => {
                    navigate('/login')
                }, 1500);
            }
            if (createUserResponse.errors) {
                notify(`${createUserResponse.errors[0].msg}`, "warn");
                setLoading(true)
                
            }
        }
    }
}, [loading]);

return [getFormValue, handleSubmit, user, loading];
};

export default RegisterHook;
