import React from "react";
import { CategoryContainer, Pagination } from "../../components";
import AllCategoryPageHook from "../../CustomHooks/Category/AllCategoryPageHook";

const AllcategoryPage = () => {

  const [category, loading, pageCount, getPage] = AllCategoryPageHook();

  return (
    <>
      <div style={{ minHeight: "670px", position: "relative" }}>
        <CategoryContainer category={category} loading={loading} />
        {pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={getPage} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default AllcategoryPage;
