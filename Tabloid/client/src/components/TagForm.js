import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addTag } from "../modules/tagManager";

const TagForm = () => {
    const emptyTag = {
        name: ''
    };

    const [tag, setTag] = useState(emptyTag);
    const history = useHistory();

    const handleInputChange = (event) => {
        const value = event.target.value;
        const key = event.target.id;

        const tagCopy = { ...tag };

        tagCopy[key] = value;
        setTag(tagCopy);
    };

    const handleSave = (event) => {
        event.preventDefault();

        addTag(tag).then((p) => {
            history.push("/tags");
            //navigate user back to main tags page
            //useHistory() doesnt really work unless youre going to another view (cant use as automatic refresh)
        });
    };

    return (
        <Form>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" placeholder="tag name"
                    value={tag.name}
                    onChange={handleInputChange} />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
        </Form>
    );
};

export default TagForm;