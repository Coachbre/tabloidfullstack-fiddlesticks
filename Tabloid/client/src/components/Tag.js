import React, { useEffect, useState } from "react";
import { deleteTag, getAllTags } from "../modules/tagManager";
// import { TagList } from "TagList";
import { Card, CardBody, Button } from "reactstrap";
import { } from "react-router-dom";

const Tag = ({ tag }) => {

    // const [updatedList, setUpdatedList] = useState([]);

    const handleDelete = (evt) => {
        evt.preventDefault();
        var results = (window.confirm('Delete the item?'))
        if (results) {
            deleteTag(tag.id)
        };
    };

    // const getNewTags = () => {
    //     getAllTags().then(updatedList => setUpdatedList(updatedList));
    // };

    // useEffect(() => {
    //     getNewTags();
    // }, []);
    // }

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