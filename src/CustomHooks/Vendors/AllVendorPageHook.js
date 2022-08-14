import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllVendorPage,
    getAllVendors,
    } from "./../../Redux/actions/vendorAction";

    const AllVendorPageHook = () => {
    const dispatch = useDispatch();

    // When First Load of vendors Page
    useEffect(() => {
        dispatch(getAllVendors(6));
    }, []);

    const vendor = useSelector((state) => state.allVendors.vendor.data);
    const pagination = useSelector(
        (state) => state.allVendors.vendor.paginationResult
    );
    const loading = useSelector((state) => state.allVendors.loading);

    // to get Page Count
    let pageCount = 0;
    if (pagination) pageCount = pagination.numberOfPages;

    // When Pressing Pagination
    const getPage = (page) => {
        dispatch(getAllVendorPage(page));
    };

    return [vendor, loading, pageCount, getPage];
};

export default AllVendorPageHook;
