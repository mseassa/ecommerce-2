import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategory } from "../../Redux/actions/categoryAction";
import { getAllVendors } from "../../Redux/actions/vendorAction";
import { useSelector } from "react-redux";
import { getOneCategory } from "../../Redux/actions/subcategoryAction";
import notify from "../Utils/useNotification";
import { createProduct } from "../../Redux/actions/productsAction";

const AddProductHook = () => {
  const [imgs, setImgs] = useState([]);
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [priceAfter, setPriceAfter] = useState("");
  const [qty, setQty] = useState("");
  const [catID, setCatID] = useState(0);
  const [brandID, setBrandID] = useState(0);
  const [subCatID, setSubCatID] = useState([]);
  const [selectedSubID, setSelectedSubID] = useState([]);

  const [options, setOptions] = useState([]);

  const [loading, setLoading] = useState(true);

  // to show/hide color picker
  const [showColor, setShowColor] = useState(false);
  const [colors, setColors] = useState([]);

  const onChangeProdName = (event) => {
    event.persist();
    setProdName(event.target.value);
  };
  //to change name state
  const onChangeprodDescription = (event) => {
    event.persist();
    setProdDescription(event.target.value);
  };
  //to change name state
  const onChangePriceBefor = (event) => {
    event.persist();
    setProdPrice(event.target.value);
  };
  //to change name state
  const onChangePriceAfter = (event) => {
    event.persist();
    setPriceAfter(event.target.value);
  }; //to change name state
  const onChangeQty = (event) => {
    event.persist();
    setQty(event.target.value);
  };
  const onChangeColor = (event) => {
    event.persist();
    setShowColor(!showColor);
  };

  // when choose new color
  const handleChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };

  const removeColor = (color) => {
    const newColors = colors.filter((event) => event !== color);
    setColors(newColors);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
    // When First Load of vendors Page
    dispatch(getAllVendors());
  }, []);

  // get last category state from redux
  const category = useSelector((state) => state.allCategory.category.data);

  // get last vendors from redux
  const vendor = useSelector((state) => state.allVendors.vendor.data);

  // get last subcategories from redux
  const subCategory = useSelector(
    (state) => state.subcategory.subcategory.data
  );

  const onSelect = (selectedList) => {
    setSelectedSubID(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubID(selectedList);
  };

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImgs(imageList);
  };

  // when select category it store category id
  const onSelectCategory = async (event) => {
    if (event.target.value !== "") {
      await dispatch(getOneCategory(event.target.value));
    }
    setCatID(event.target.value);
  };
  // when select vendor it store vendor id
  const onSelectVendor = (event) => {
    setBrandID(event.target.value);
  };

  useEffect(() => {
    if (catID !== "") {
      if (subCategory) {
        setOptions(subCategory);
      }
    }
  }, [catID]);

  // to save data

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      catID === "" ||
      prodName === "" ||
      prodDescription === "" ||
      prodPrice <= 0 ||
      imgs.length <= 0
    ) {
      notify("Please Complete Data", "warn");
      return;
    }

    const formData = new FormData();

    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", prodPrice);
    formData.append("imageCover", imgs[0].file);
    formData.append("category", catID);
    formData.append("brand", brandID);

    colors.map((item) => formData.append("availableColors", item));
    imgs.map((item) => formData.append("images", item.file));
    selectedSubID.map((item) => formData.append("subcategory", item._id));
    setLoading(true);
    await dispatch(createProduct(formData));
    setLoading(false);
  };

  // get last products from redux
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (loading === false) {
      setImgs([]);
      setProdName("");
      setProdDescription("");
      setProdPrice("");
      setPriceAfter("");
      setQty("");
      setCatID(0);
      setBrandID(0);
      setSubCatID([]);
      setSelectedSubID([]);
      setColors([]);
      setOptions([]);

      setTimeout(() => setLoading(true), 1500);

      if (products) {
        if (products.status === 201) {
          notify("Adding Completed", "success");
        } else {
          notify("There is a problem", "error");
        }
      }
    }
  }, [loading]);

  return [
    imgs,
    onChange,
    prodName,
    prodDescription,
    prodPrice,
    priceAfter,
    qty,
    onSelectCategory,
    catID,
    category,
    options,
    onSelect,
    onRemove,
    onSelectVendor,
    vendor,
    brandID,
    colors,
    removeColor,
    showColor,
    handleChangeComplete,
    handleSubmit,
    onChangeProdName,
    onChangeprodDescription,
    onChangePriceBefor,
    onChangePriceAfter,
    onChangeQty,
    onChangeColor
  ];
};

export default AddProductHook;
