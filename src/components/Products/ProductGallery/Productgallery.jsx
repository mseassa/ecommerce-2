import { Carousel } from 'react-bootstrap'
import React from 'react'
import images from '../../../constants/images'
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from '../../../CustomHooks/Products/ViewProductDetailsHook';
import Loader from './../../Utils/DottedLoader/Loader';

const Productgallery = () => {
  const { id } = useParams();
  const [item] = ViewProductDetailsHook(id)

  return (
    <>
    <Carousel variant="dark" indicators={false} className=''>
      {
        item.images ? (item.images.map((image, index)=> <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={image}
          alt={`${item.title} ${index+1}`}
        />
      </Carousel.Item>)) : ('')
      }
</Carousel>
    </>
  )
}

export default Productgallery