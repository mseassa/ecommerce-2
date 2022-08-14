import React from "react";
import { Row, Form } from "react-bootstrap";
import SidebarSearchHook from "../../../CustomHooks/Search/SidebarSearchHook";

const SideFilterByPrice = () => {
    const [category, vendor, clickCategory, clickBrand, getPriceFrom, getPriceTo] = SidebarSearchHook()
    return (
        <>
        <Row>
            <h5 className="section-title position-relative text-uppercase mb-3">
            <span className=" pr-3">Filter by price</span>
            </h5>
            <div className="bg-white p-4 mb-3">
<Form className='d-flex justify-content-between'>
      <Form.Group className="d-flex align-items-center" controlId="formBasicEmail">
        <Form.Label className='mb-0 me-1'>From: </Form.Label>
        <Form.Control value={localStorage.getItem('priceFrom')} onChange={getPriceFrom} className='' type="number" />
      </Form.Group>

      <Form.Group className="d-flex align-items-center" controlId="formBasicEmail">
        <Form.Label className='mb-0 me-1'>To: </Form.Label>
        <Form.Control value={localStorage.getItem('priceTo')} onChange={getPriceTo} className='' type="number" />
      </Form.Group>

    </Form>
    </div>
        </Row>
        </>
    );
};

export default SideFilterByPrice;
