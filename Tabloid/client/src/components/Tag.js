import React, { useEffect, useState } from "react";
import { deleteTag, getAllTags } from "../modules/tagManager";
// import { TagList } from "TagList";
import { Card, CardBody, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const Tag = ({ tag, getAllTags }) => {

    // const [updatedList, setUpdatedList] = useState([]);

    const handleDelete = (evt) => {
        evt.preventDefault();
        var results = (window.confirm('Delete the item?'))
        if (results) {
            deleteTag(tag.id).then(() => {
                getAllTags()
            })
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