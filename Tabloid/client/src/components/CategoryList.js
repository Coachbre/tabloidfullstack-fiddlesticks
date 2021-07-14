import React, { useEffect, useState } from "react";
import { getAllCategories } from "../modules/categoryManager";
import Category from "./Category";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        getAllCategories().then(categories => setCategories(categories));
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    {categories?.map((category) => (
                        <Category category={category} key={category.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default CategoryList;