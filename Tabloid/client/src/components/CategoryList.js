import React, { useEffect, useState } from "react";
import { getAllCategories } from "../modules/categoryManager";
import Category from "./Category";
import { Link } from "react-router-dom";

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
                        <Category category={category} getCategories={getCategories} key={category.id} />
                    ))}
                </div>
            </div>
            <Link to="/category/add">Add a new category</Link>
        </>
    )
}

export default CategoryList;