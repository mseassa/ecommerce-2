import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ViewSearchProductsHook from '../Products/ViewSearchproductsHook'

const NavbarSearchHook = () => {

    const navigate = useNavigate()

    const [searchWord, setSearchWord] = useState('')
    const [products, pageCount, getPage, getProduct] = ViewSearchProductsHook()

    const onChangeSearchWord = (event) => {
        localStorage.setItem('searchWord', event.target.value)
        setSearchWord(event.target.value)
    }

    useEffect(() => {
        setTimeout(() => {
            // if (window.location.pathname !== '/products') {
            //     // navigate('/products')
            // }
            getProduct(searchWord)
        }, 1000);
    }, [searchWord])
    


  return [searchWord, onChangeSearchWord]
}


export default NavbarSearchHook