import React from 'react'
import { Featured, Header, NavbarLogin, Slider, HomeCategories, ProductCardContainer, DiscountSection, FeaturedVendors, Footer } from '../../components'
import ViewHomeProductsHook from '../../CustomHooks/Products/ViewHomeProductsHook'

const HomePage = () => {

    const [ products ] = ViewHomeProductsHook()
    return (
        <div>
            
            <Slider />
            <Featured />
            <HomeCategories />
            <ProductCardContainer title='Fetured products' btntitle='More' pathText='/products' products= { products }/>
            <DiscountSection />
            <ProductCardContainer title='Recent products' btntitle='More' pathText='/products' products= { products }/>
            <FeaturedVendors title='Featured Brands' btntitle='More' />
            
        </div>
    )
}

export default HomePage
