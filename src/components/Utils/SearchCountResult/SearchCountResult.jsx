import React from "react";
import { Container } from "react-bootstrap";
import UnopDropdown from "unop-react-dropdown";
import images from "../../../constants/images";

const SearchCountResult = ({ title, getProduct }) => {
    const handler = () => {};
    const clickMe = (key) => {
    localStorage.setItem("sortType", key);
    getProduct();
    };
    return (
        <>
        <Container>
            <div className="d-flex justify-content-between pt-3 px-2 mb-4">
            <div className="fw-bold fs-5">{title} Search Results</div>
            <div className="search-count-text d-flex">
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
                    />{" "}
                    Sorting
                    </p>
                }
                delay={0}
                align="CENTER"
                hover={true}
                >
                <div className="card-filter">
                    <p
                    onClick={() => clickMe("")}
                    className="border-bottom card-filter-item mb-0"
                    >
                    Without Sorting
                    </p>
                    <p
                    onClick={() => clickMe("Featured Products")}
                    className="border-bottom card-filter-item mb-0"
                    >
                    Featured Products
                    </p>
                    <p
                    onClick={() => clickMe("High rated")}
                    className="border-bottom card-filter-item mb-0"
                    >
                    High rated
                    </p>
                    <p
                    onClick={() => clickMe("Price from Low to High")}
                    className="border-bottom card-filter-item mb-0"
                    >
                    Price from Low to High
                    </p>
                    <p
                    onClick={() => clickMe("Price from High to Low")}
                    className=" card-filter-item mb-0"
                    >
                    Price from High to Low
                    </p>
                </div>
                </UnopDropdown>
            </div>
            </div>
        </Container>
        </>
    );
};

export default SearchCountResult;
