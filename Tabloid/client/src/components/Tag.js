import React from "react";
import { deleteTag } from "../modules/tagManager";
import { Card, CardBody, Button } from "reactstrap";

const Tag = ({ tag, getTags }) => {

    const handleDelete = (evt) => {
        evt.preventDefault();
        var results = (window.confirm('Delete the item?'))
        if (results) {
            deleteTag(tag.id).then(() => {
                getTags()})
        };
    };

    return (
        <Card>
            <CardBody>
                <p>{tag.name}</p>
                <Button onClick={handleDelete}>Delete</Button>
            </CardBody>
        </Card >
    );
};
export default Tag;