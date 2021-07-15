import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addCategory } from '../modules/categoryManager';
import { useHistory } from 'react-router';

const CategoryForm = () => {
    const [category, setCategory] = useState({
        name: ""
    })

    const history = useHistory();

    const handleInputChange = (evt) => {
        let value = evt.target.value;
        let key = evt.target.id;
        const newCategory = { ...category };

        newCategory[key] = value;
        setCategory(newCategory)
    };

    const handleSave = (event) => {
        event.preventDefault();
        addCategory(category)
            .then(() =>
                history.push("/category")
            );
    };

    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="name">Category Name</Label>
                    <Input type="text" name="name" placeholder="Category Name"
                        defaultValue={category.name} onChange={handleInputChange} />
                </FormGroup>
                <Button className="btn btn-primary" onClick={handleSave}>Save</Button>
            </Form>
        </>
    )
};

export default CategoryForm;