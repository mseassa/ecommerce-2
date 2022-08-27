import React from 'react'
import { Container } from 'react-bootstrap';
import SubTitle from '../../Utils/SubTitle/SubTitle';
import ProductCard from '../ProductCard/ProductCard';
import ProductContainerHook from './../../../CustomHooks/Products/ProductContainerHook';

const ProductCardContainer = ({ title, btntitle, pathText, products }) => {

  const [favProducts] = ProductContainerHook()

  
  return (
    <>
    <Container fluid>

      {
        products ? (<SubTitle title={title} btntitle={btntitle} pathText={pathText} />) : ('')
      }
            

        <div className="row px-xl-5 pb-3">
          {
            products.length > 0 ? (products.map((product)=> <ProductCard key={product._id} product={product} favProducts={favProducts} />)) : (<h4 className='text-center'>No Product</h4>)
          }
        </div>

    </Container>
    </>
  )
}

export default ProductCardContainer