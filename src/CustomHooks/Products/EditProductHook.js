import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategory } from "../../Redux/actions/categoryAction";
import { getAllVendors } from "../../Redux/actions/vendorAction";
import { useSelector } from "react-redux";
import { getOneCategory } from "../../Redux/actions/subcategoryAction";
import notify from "../Utils/useNotification";
import { createProduct, getOneProduct } from "../../Redux/actions/productsAction";
import { updateProduct } from './../../Redux/actions/productsAction';

const AdminEditProduct = (id) => {

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

  
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async()=> {
      await dispatch(getOneProduct(id))
      await dispatch(getAllCategory());
      await dispatch(getAllVendors());
    }
    run()
  }, []);

  // get product details by id
  const productDetails = useSelector((state)=> state.products.productDetails.data)

  
  // get last category state from redux
  const category = useSelector((state) => state.allCategory.category.data);

  // get last vendors from redux
  const vendor = useSelector((state) => state.allVendors.vendor.data);

  // get last subcategories from redux
  const subCategory = useSelector(
    (state) => state.subcategory.subcategory.data
  );

  useEffect(() => {
    if (productDetails) {
      setProdName(productDetails.title)
      setImgs(productDetails.images);
      setProdDescription(productDetails.description);
      setProdPrice(productDetails.price);
      setPriceAfter(productDetails.price);
      setQty(productDetails.quantity);
      setCatID(productDetails.category);
      setBrandID(productDetails.brand);
      setColors(productDetails.availableColors);
    }
  }, [productDetails])
  

  //to change prodName state
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
    setCatID(event.target.value);
  };
  // when select vendor it store vendor id
  const onSelectVendor = (event) => {
    setBrandID(event.target.value);
  };

  useEffect(() => {
    if (catID !== '') {
    const run = async ()=> {
      await dispatch(getOneCategory(catID));
    }
    run()
  }
  }, [catID]);

  useEffect(() => {
      if (subCategory) {
        setOptions(subCategory);
      }
  }, [subCategory])
  
      //convert url to file
      const convertURLtoFile = async (url) => {
        const response = await fetch(url, { mode: "cors" });
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = { type: `image/${ext}` };
        return new File([data], Math.random(), metadata);


    };
    


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
    let imgCover;
    if (imgs[0].length <= 1000) {
      convertURLtoFile(imgs[0]).then(val => imgCover=val)
    } else {
      imgCover = imgs[0].file
    }


    let imgsItem = []
    imgs.map((item)=> {
      if (item.length <= 1000) {
        convertURLtoFile(item).then(val => imgsItem.push(val))
      } else {
        imgsItem.push(item.file)
      }
    })


    const formData = new FormData();

    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", prodPrice);
    formData.append("category", catID);
    formData.append("brand", brandID);
    setTimeout(() => {
      formData.append("imageCover", imgCover);
      imgsItem.map((item) => formData.append("images", item));
      
    }, 1000);
    colors.map((item) => formData.append("availableColors", item));
    selectedSubID.map((item) => formData.append("subcategory", item._id));
    setTimeout(async() => {
      setLoading(true);
      await dispatch(updateProduct(id, formData));
      setLoading(false);
    }, 1000);
  };

  // get last products from redux
  const updatedProduct = useSelector((state) => state.products.updatedProduct);

  useEffect(() => {
    if (loading === false) {
      // setImgs([]);
      // setProdName("");
      // setProdDescription("");
      // setProdPrice("");
      // setPriceAfter("");
      // setQty("");
      // setCatID(0);
      // setBrandID(0);
      // setSubCatID([]);
      // setSelectedSubID([]);
      // setColors([]);
      // setOptions([]);

      setTimeout(() => setLoading(true), 1500);

      if (updatedProduct) {
        if (updatedProduct.status === 200) {
          notify("Update Completed", "success");
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
    onChangeColor,
    productDetails,
    selectedSubID
  ];
};

export default AdminEditProduct;
