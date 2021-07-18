import React from "react";
import { useHistory } from "react-router";
import { Button } from "reactstrap";
import { Card, CardBody } from "reactstrap";
import { deleteCategory } from "../modules/categoryManager";

const Category = ({ category }) => {

    const deleteACategory = (event) => {
        event.preventDefault()
        const confirmDelete = window.confirm("Are you sure you want to delete this category?")
        if (confirmDelete) {
            deleteCategory(category.id)
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