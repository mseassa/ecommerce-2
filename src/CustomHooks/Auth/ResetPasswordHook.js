import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../Redux/actions/authAction";
import notify from "../Utils/useNotification";
import { resetPassword } from "./../../Redux/actions/authAction";

const ResetPasswordHook = () => {
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    let myNewPassword = { ...newPassword };
    myNewPassword[event.target.name] = event.target.value;
    setNewPassword(myNewPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPassword.password === "" || newPassword.confirmPassword === "") {
      notify("Please insert password", "error");
      return;
    }
    if (newPassword.password !== newPassword.confirmPassword) {
      notify("Password don't match", "error");
      return;
    }
    // setLoading(false)
    await dispatch(
      resetPassword({
        email: localStorage.getItem("user-email"),
        newPassword: newPassword.password,
      })
    );
    setLoading(false);
  };

  const response = useSelector((state) => state.AuthReducer.resetPassword);

  useEffect(() => {
    if (loading === false) {
      if (response) {
        if (response.status == 200) {
          notify(`Password Changed`, "success");
          localStorage.removeItem("user-email");
          setNewPassword({
            password: "",
            confirmPassword: "",
          });
          setLoading(true);
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        }
        if (response.status !== 200) {
          notify(`${response.message}`, "warn");
          localStorage.removeItem("user-email");
          setNewPassword({
            password: "",
            confirmPassword: "",
          });
          setLoading(true);
          // navigate()
        }
      }
    }
  }, [loading]);

  return [handleOnChange, handleSubmit, loading, newPassword];
};

export default ResetPasswordHook;
