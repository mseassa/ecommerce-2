import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSomeCategory } from "./../../Redux/actions/categoryAction";
import { useSelector } from "react-redux";

const NavbarCategoryHook = () => {
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getSomeCategory(4));
},[]);

// get last category state from redux
const category = useSelector((state) => state.allCategory.someCategory.data);
// get last loading state from redux
const loading = useSelector((state) => state.allCategory.loading);

return [category, loading];
};

export default NavbarCategoryHook;
