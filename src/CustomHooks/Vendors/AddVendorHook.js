import React, { useState, useEffect } from "react";
import images from "../../constants/images";
import { useDispatch, useSelector } from "react-redux";
import notify from "./../Utils/useNotification";
import { createVendor } from './../../Redux/actions/vendorAction';

const AddVendoryHook = () => {
const [img, setImg] = useState(images.avatar);
const [name, setName] = useState("");
const [selectedFile, setSelectedFile] = useState(null);
const [loading, setLoading] = useState(true);
// const [isPress, setIsPress] = useState(false)

// to change name in state
const onChangeName = (event) => {
    setName(event.target.value);
};

const dispatch = useDispatch();
const res = useSelector((state) => state.allVendors.vendor);

// to Save choosen image
const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
    setImg(URL.createObjectURL(event.target.files[0]));
    setSelectedFile(event.target.files[0]);
    }
};

// save data in database
const handleSubmit = async (event) => {
    event.preventDefault();
    if (name === "" || selectedFile === null) {
    notify("please complete data", "warn");
    return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setLoading(true);
    // setIsPress(true)
    await dispatch(createVendor(formData));
    setLoading(false);
};

useEffect(() => {
    if (!loading) {
    setName("");
    setImg(images.avatar);
    setSelectedFile(null);
    setLoading(true);
    // setTimeout(()=>setLoading(true), 3000)
    // setTimeout(()=>setIsPress(false), 3000)
    if (res.status === 201) {
        notify("Adding Completed", "success");
    } else {
        notify("adding not completed", "error");
    }
    }
}, [loading]);

return [img, name, loading, handleSubmit, onImageChange, onChangeName];
};

export default AddVendoryHook;
