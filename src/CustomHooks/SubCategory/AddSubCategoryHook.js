import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/actions/categoryAction";
import { createSubCategory } from "../../Redux/actions/subcategoryAction";
import notify from "./../../CustomHooks/Utils/useNotification";

const AddSubCategoryHook = () => {
    const [id, setId] = useState("0");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!navigator.onLine) {
            notify("No Connection", "warn");
            return
        }
        dispatch(getAllCategory());
    }, []);

    // get last category state from redux
    const category = useSelector((state) => state.allCategory.category.data);

    // on change dropdown menu
    const handleChange = (event) => {
        setId(event.target.value);
    };

    // on saving data
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!navigator.onLine) {
            notify("No Connection", "warn");
            return
        }
        if (name === "") {
        notify("Please Enter Subcategory name", "warn");
        return;
        }
        if (id === "0") {
        notify("Please choose category", "warn");
        return;
        }

        setLoading(true);
        await dispatch(
        createSubCategory({
            name: name,
            category: id,
        })
        );
        setLoading(false);
    };


    //to save name
    const onChangeName = (event) => {
        event.persist()
        setName(event.target.value)
    }

    // get last subcategory state from redux
    const res = useSelector((state) => state.subcategory.subcategory);

    useEffect(() => {
        if (!loading) {
        setName("");
        setId("0");

        if (res.status === 201) {
            notify("Adding Completed", "success");
        } else if (
            res === "error AxiosError: Request failed with status code 400"
        ) {
            notify("Name is repeated please enter another name", "error");
        } else {
            notify("Adding not completed", "error");
        }
        setLoading(true);
        }
    }, [loading]);


    return [id, name, loading, category, handleChange, handleSubmit, onChangeName ]
};

export default AddSubCategoryHook;
