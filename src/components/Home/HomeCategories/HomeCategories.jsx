import React from "react";
import { Container } from "react-bootstrap";
import CategoryCard from "../../Category/CategoryCard";
import SubTitle from "../../Utils/SubTitle/SubTitle";
import Loader from "./../../Utils/DottedLoader/Loader";
import HomeCategoryHook from "./../../../CustomHooks/Category/HomeCategoryHook";

const HomeCategories = () => {
    const [category, loading] = HomeCategoryHook();

    return (
        <>
        {/* Categories Start  */}
        <Container fluid>
            <SubTitle
            title="Categories"
            btntitle="More"
            pathText="/allcategories"
            />

            <div className="row px-xl-5 pb-3 position-relative">
            {loading === false ? (
                category.length > 0 ? (
                category
                    .map((categoryItem) => (
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

export default HomeCategories;
