import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  deleteFromWishList,
} from "./../../Redux/actions/wishListAction";
import notify from "./../Utils/useNotification";

const ProductCardHook = (product, favProducts) => {
  const [favIconColor, setFavIconColor] = useState({
    bg: "",
    color: "",
  });
  const [isFav, setIsFav] = useState(
    favProducts.some((item) => item === product._id)
  );
  const [loadingAdd, setLoadingAdd] = useState(true);
  const [loadingRemove, setLoadingRemove] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFav(favProducts.some((item) => item === product._id));
  }, [favProducts]);

  const handleFav = () => {
    setIsFav(!isFav);
    if (isFav === true) {
      deleteFromWishListData();
    } else {
      addToWishListData();
    }
  };
  useEffect(() => {
    if (isFav === true) {
      setFavIconColor({
        bg: "bg-dark",
        color: "text-primary",
      });
    } else {
      setFavIconColor({
        bg: "",
        color: "",
      });
    }
  }, [isFav]);

  const addToWishListData = async () => {
    setIsFav(true);
    setLoadingAdd(true);
    await dispatch(
      addToWishList({
        productId: product._id,
      })
    );
    setLoadingAdd(false);
  };

  const deleteFromWishListData = async () => {
    setIsFav(false);
    setLoadingRemove(true);
    await dispatch(deleteFromWishList(product._id));
    setLoadingRemove(false);
  };

  const addWishListData = useSelector(
    (state) => state.WishListReducer.addWishList
  );
  const deleteWishListData = useSelector(
    (state) => state.WishListReducer.deleteWishList
  );

  useEffect(() => {
    if (loadingAdd === false) {
      if (addWishListData.data && addWishListData.status === 200) {
        notify(`${addWishListData.data.message}`, "success");
      } else if (addWishListData.data && addWishListData.status === 401) {
        setFavIconColor({
          bg: "",
          color: "",
        });
        notify(`You have to logIn`, "warn");
      }
    }
  }, [loadingAdd]);

  useEffect(() => {
    if (loadingRemove === false) {
      if (deleteWishListData.data && deleteWishListData.status === "success") {
        notify(`${deleteWishListData.message}`, "warn");
      } else if (deleteWishListData.data && deleteWishListData.status === 401) {
        setFavIconColor({
          bg: "",
          color: "",
        });
        notify(`You have to logIn`, "warn");
      }
    }
  }, [loadingRemove]);

  return [handleFav, favIconColor];
};

export default ProductCardHook;
