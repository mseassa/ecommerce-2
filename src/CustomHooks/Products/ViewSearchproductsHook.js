import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsSearch,
  getAllProductsWithPage,
} from "../../Redux/actions/productsAction";

const ViewSearchProductsHook = () => {
  let limit = 6;
  const dispatch = useDispatch();

  let word = "",
    catQuery = "",
    brandQuery = "",
    priceFrom = "",
    priceTo = "",
    priceFromString = "",
    priceToString = "";

  const getStorage = () => {
    if (localStorage.getItem("searchWord") != null) {
      word = localStorage.getItem("searchWord");
    }
    if (localStorage.getItem("catCheked") != null) {
      catQuery = localStorage.getItem("catCheked");
    }
    if (localStorage.getItem("brandCheked") != null) {
      brandQuery = localStorage.getItem("brandCheked");
    }
    if (localStorage.getItem("priceFrom") != null) {
      priceFrom = localStorage.getItem("priceFrom");
    }
    if (localStorage.getItem("priceTo") != null) {
      priceTo = localStorage.getItem("priceTo");
    }
    if (priceFrom == "" || priceFrom <= 0) {
      priceFromString = "";
    } else {
      priceFromString = `price[gte]=${priceFrom}`;
    }
    if (priceTo == "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `price[lte]=${priceTo}`;
    }
  };

  const getProduct = async () => {
    getStorage();
    sortData();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&${catQuery}&${brandQuery}&${priceToString}&${priceFromString}`
      )
    );
  };

  useEffect(() => {
    getProduct();
  }, []);

  const allProducts = useSelector((state) => state.products.allProducts.data);
  const pagination = useSelector(
    (state) => state.products.allProducts.paginationResult
  );
  const resultsCount = useSelector(
    (state) => state.products.allProducts.results
  );
  let products = [];
  try {
    if (allProducts) {
      products = allProducts;
    } else {
      products = [];
    }
  } catch (error) {}

  let pageCount = "";
  try {
    if (pagination) {
      pageCount = pagination.numberOfPages;
    } else {
      pageCount = 0;
    }
  } catch (error) {}

  let results;
  try {
    if (resultsCount) {
      results = resultsCount;
    } else {
      results = 0;
    }
  } catch (error) {}

  // When Pressing Pagination
  const getPage = async (page) => {
    getStorage();
    sortData()
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&page=${page}&${catQuery}&${brandQuery}&${priceToString}&${priceFromString}`
      )
    );
  };

  // when user choose sort type

  let sortType = "",
    sort = '';
  const sortData = () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }
    if (sortType === "Price from Low to High") {
      sort = "+price";
    } else if (sortType === "Price from High to Low") {
      sort = "-price";
    } else if (sortType === "High rated") {
      sort = "-ratingsQuantity";
    } else if (sortType === "Featured Products") {
      sort = "-sold";
    }
  };

  return [products, pageCount, getPage, getProduct, results];
};

export default ViewSearchProductsHook;
