import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { Card, CardBody } from "reactstrap";
import { deleteCategory } from "../modules/categoryManager";


const Category = ({ category, getCategories }) => {

    const deleteACategory = (event) => {
        event.preventDefault()
        const confirmDelete = window.confirm("Are you sure you want to delete this category?")
        if (confirmDelete) {
            deleteCategory(category.id).then(() => { getCategories() })
        }
    }





    return (
        <Card>
            <CardBody>
                <p key={category.id}>{category.name}</p>
                <Button color="danger" onClick={deleteACategory}>Delete</Button>
            </CardBody>
        </Card>
    )
};

export default Category;