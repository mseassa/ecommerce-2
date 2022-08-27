import React from "react";
import { Container } from "react-bootstrap";
import RatePost from "./RatePost";
import RateItem from "./RateItem";
import { useParams } from "react-router-dom";
import ViewAllReviewsHook from "../../CustomHooks/Review/ViewAllReviewsHook";
import { ToastContainer } from "react-toastify";
import Pagination from "../Utils/Pagination/Pagination";

const ReviewsContainer = ({ item }) => {
  const { id } = useParams();
  const [allReviewsProduct, getPage] = ViewAllReviewsHook(id);

  return (
    <>
      <Container className="my-5 bg-white py-3">
        <RatePost />

        {allReviewsProduct.data
          ? allReviewsProduct.data.map((item) => (
              <RateItem key={item._id} item={item} />
            ))
          : ""}
        <ToastContainer />
        {allReviewsProduct.paginationResult &&
        allReviewsProduct.paginationResult.numberOfPages > 1 ? (
          <Pagination
            pageCount={
              allReviewsProduct.paginationResult
                ? allReviewsProduct.paginationResult.numberOfPages
                : 0
            }
            onPress={getPage}
          />
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default ReviewsContainer;
