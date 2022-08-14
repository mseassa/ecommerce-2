import React from 'react'
import { Col } from 'react-bootstrap';
import UnopDropdown from 'unop-react-dropdown'
import images from '../../constants/images';

const AdminClientDetails = () => {
    const handler=()=> {

    }
  return (
    <>
    <Col lg='4'>
        <div className='bg-light mb-5 p-3'>
            <h5>Client Details</h5>
            <div className='d-flex align-items-center ps-2 mb-2'>
                <h6 className='mb-0'>Name: </h6>
                <p className='mb-0 ms-2'>test</p>
            </div>
            <div className='d-flex align-items-center ps-2 mb-2'>
                <h6 className='mb-0'>Mobile: </h6>
                <p className='mb-0 ms-2'>test</p>
            </div>
            <div className='d-flex align-items-center ps-2 mb-2'>
                <h6 className='mb-0'>Email: </h6>
                <p className='mb-0 ms-2'>test</p>
            </div>
            
            <div className='d-flex align-items-center justify-content-center ps-2 mb-2'>
                <h6 className='mb-0'>Order Total Price: </h6>
                <p className='mb-0 ms-2'>test</p>
            </div>

            
            <div className='d-flex align-items-center justify-content-center ps-2 mb-2'>
                <select name="" id="">
                    <optgroup label='Order Statue'>
                    <option value="val1">Working on it</option>
                    <option value="val1">Finished</option>
                    <option value="val1">Canceled</option>

                    </optgroup>
                </select>
            </div>

            <div className='d-flex align-items-center justify-content-center ps-2 mb-2'>
            <UnopDropdown
                        onAppear={handler}
                        onDisappearStart={handler}
                        trigger={
                            <p className="mx-1">
                                <img
                                    width="20px"
                                    height="20px"
                                    className="ms-1"
                                    src={images.sort}
                                    alt=""
                                /> Order Status
                            </p>
                        }
                        delay={0}
                        align="CENTER"
                        hover>
                        <div className="card-filter">
                            <div className="border-bottom card-filter-item">workin on it</div>
                            <div className="border-bottom card-filter-item">Finised</div>
                            <div className="border-bottom card-filter-item">
                                Canceled
                            </div>
                        </div>
                    </UnopDropdown>
                    </div>

        </div>
    </Col>
    </>
  )
}

export default AdminClientDetails