import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllVendors } from './../../Redux/actions/vendorAction';

const HomeVendorsHook = () => {
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getAllVendors(7));
}, []);

// get last vendor state from redux
const vendor = useSelector((state) => state.allVendors.vendor.data);
// get last loading state from redux
const loading = useSelector((state) => state.allVendors.loading);

return [vendor, loading];
};

export default HomeVendorsHook;
