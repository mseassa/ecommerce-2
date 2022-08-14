import { useState } from "react";
import images from "../../constants/images";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import notify from "./../Utils/useNotification";
import { createCategory } from "../../Redux/actions/categoryAction";
import { useEffect } from "react";

const AddCategoryHook = () => {
const [img, setImg] = useState(images.avatar);
const [name, setName] = useState("");
const [selectedFile, setSelectedFile] = useState(null);
const [loading, setLoading] = useState(true);

// to change name in state
const onChangeName = (event) => {
    setName(event.target.value);
};

const dispatch = useDispatch();
const res = useSelector((state) => state.allCategory.category);

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
    await dispatch(createCategory(formData));
    setLoading(false);
};

useEffect(() => {
    if (!loading) {
    setName("");
    setImg(images.avatar);
    setSelectedFile(null);
    setLoading(true);
    if (res.status === 201) {
        notify("Adding Completed", "success");
    } else {
        notify("Adding not completed", "error");
    }
    }
}, [loading]);

return [img, name, loading, handleSubmit, onImageChange, onChangeName];
};

export default AddCategoryHook;
