import React from "react";
import VendorContainer from "../../components/Vendor/VendorContainer/VendorContainer";
import AllVendorPageHook from "../../CustomHooks/Vendors/AllVendorPageHook";
import Pagination from "./../../components/Utils/Pagination/Pagination";

const AllVendorsPages = () => {
  const [vendor, loading, pageCount, getPage] = AllVendorPageHook();

  return (
    <>
      <div style={{ minHeight: "670px", position: "relative" }}>
        <VendorContainer vendor={vendor} loading={loading} />

        {pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={getPage} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default AllVendorsPages;
