import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategory } from "./../../Redux/actions/categoryAction";
import { useSelector } from "react-redux";

const HomeCategoryHook = () => {
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getAllCategory(4));
}, []);

// get last category state from redux
const category = useSelector((state) => state.allCategory.category.data);
// get last loading state from redux
const loading = useSelector((state) => state.allCategory.loading);

return [category, loading];
};

export default HomeCategoryHook;
