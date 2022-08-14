import React from "react";
import {
  CategoryHeader,
  Pagination,
  ProductCardContainer,
  SearchCountResult,
  SideFilterContainer,
} from "../../components";
import { Container, Row, Col } from "react-bootstrap";
import ViewSearchProductsHook from "../../CustomHooks/Products/ViewSearchproductsHook";

const ShopProductsPage = () => {
  const [products, pageCount, getPage, getProduct, results] = ViewSearchProductsHook();
  return (
    <>
      <div style={{ minHeight: "670px" }}>
        <Container fluid>
          <CategoryHeader />
          <SearchCountResult title={results} getProduct={getProduct} />
          <Row className="d-flex flex-row">
            <Col md="4" className="d-flex">
              <SideFilterContainer />
            </Col>
            <Col md="8">
              <ProductCardContainer products={products} />
          {pageCount > 1 ? (
            <Pagination pageCount={pageCount} onPress={getPage} />
          ) : (
            ""
          )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ShopProductsPage;
