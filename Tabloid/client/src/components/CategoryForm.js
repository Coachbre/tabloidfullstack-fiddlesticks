import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addCategory } from '../modules/categoryManager';
import { useHistory } from 'react-router';

const CategoryForm = () => {
    const [category, setCategory] = useState({
        name: ""
    })

    const history = useHistory();

    // const handleInputChange = (evt) => {
    //     let value = evt.target.value;
    //     let key = evt.target.id;
    //     const newCategory = { ...category };

    //     newCategory[key] = value;
    //     setCategory(newCategory)
    // };

    const handleSave = (event) => {
        event.preventDefault();
        addCategory(category)
            .then(() =>
                history.push("/category")
            );
    };

    return (
        <>
            <Form onSubmit={handleSave}>
                <FormGroup>
                    <Label for="name">Category Name</Label>
                    <Input id="name" type="text" name="name" placeholder="Category Name"
                        ///when the user typed into the box, it saved as the string, and the server doesnt know what to do with a string
                        ///when put ({name: event.target.value}), its setting the category we typed as an object instead of a string
                        defaultValue={category.name} onChange={event => setCategory({ name: event.target.value })} />
                </FormGroup>
                <Button className="btn btn-primary">Save</Button>
            </Form>
        </>
    )
};

export default CategoryForm;