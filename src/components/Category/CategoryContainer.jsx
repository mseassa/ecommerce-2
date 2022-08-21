import React from "react";
import { Container } from "react-bootstrap";
import SubTitle from "../Utils/SubTitle/SubTitle";
import CategoryCard from "./CategoryCard";
import Loader from "./../Utils/DottedLoader/Loader";

const CategoryContainer = ({ category, loading }) => {
    return (
        <>
        {/* Categories Start  */}
        <Container fluid>
            <SubTitle title="All Categories" />

            <div className="row px-xl-5 pb-3 justify-content-center align-items-center">
            {loading === false ? (
                category ? (
                category.map((categoryItem) => (
                    <CategoryCard
                    key={categoryItem._id}
                    title={categoryItem.name}
                    img={categoryItem.image}
                    />
                ))
                ) : (
                ""
                )
            ) : (
                <Loader />
            )}
            </div>
        </Container>
        {/* Categories End */}
        </>
    );
};

export default CategoryContainer;
