import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ViewSearchProductsHook from "../Products/ViewSearchproductsHook";
import { getAllCategory } from './../../Redux/actions/categoryAction';
import { getAllVendors } from './../../Redux/actions/vendorAction';

const SidebarSearchHook = () => {

    const [products, pageCount, getPage, getProduct, results] = ViewSearchProductsHook()

    const [catChecked, setCatChecked] = useState([])
    const [brandChecked, setBrandChecked] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        const run = async () => {
            await dispatch(getAllCategory())
            await dispatch(getAllVendors())
        }
        run()
    }, [])

    const allCategory = useSelector(state => state.allCategory.category)
    const allVendors = useSelector(state => state.allVendors.vendor)

    let category = [];
    if (allCategory.data) {
        category = allCategory.data
    }
    let vendor = [];
    if (allVendors.data) {
        vendor = allVendors.data
    }


    const clickCategory= (event)=> {
        let value = event.target.value
        if (value === '0') {
            setCatChecked([])
        } else {
            if (event.target.checked === true) {
                setCatChecked([...catChecked, value])
            } else {
                const newArray = catChecked.filter((item) => item !== value)
                setCatChecked(newArray)
            }
        }

    }
    useEffect(() => {
        var catQuery = catChecked.map((item)=> `category[in][]=${item}`).join('&')
        localStorage.setItem('catCheked', catQuery)
        setTimeout(() => {
            getProduct()
        }, 1000);
    }, [catChecked])


    const clickBrand= (event)=> {
        let value = event.target.value
        if (value === '0') {
            setBrandChecked([])
        } else {
            if (event.target.checked === true) {
                setBrandChecked([...brandChecked, value])
            } else {
                const newArray = brandChecked.filter((item) => item !== value)
                setBrandChecked(newArray)
            }
        }
    }

    
 

    useEffect(() => {
        var brandQuery = brandChecked.map((item)=> `brand[in][]=${item}`).join('&')
        localStorage.setItem('brandCheked', brandQuery)
        setTimeout(() => {
            getProduct()
        }, 1000);
    }, [brandChecked])

    const [priceFrom, setPriceFrom] = useState(0)
    const [priceTo, setPriceTo] = useState(0)
    

    const getPriceFrom = (event) => {
        localStorage.setItem('priceFrom', event.target.value)
        setPriceFrom(event.target.value)
    }

    const getPriceTo = (event) => {
        localStorage.setItem('priceTo', event.target.value)
        setPriceTo(event.target.value)
    }

    useEffect(() => {
        setTimeout(() => {
            getProduct()
        }, 1000);
    }, [priceFrom, priceTo])
    

  return [category, vendor, clickCategory, clickBrand, getPriceFrom, getPriceTo]
};

export default SidebarSearchHook;
