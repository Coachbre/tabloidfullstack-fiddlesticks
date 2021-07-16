import React, { useState } from "react";
import { getAllTags, deleteTag } from "../modules/tagManager";
import { Card, CardBody, Button } from "reactstrap";
import { useParams } from "react-router-dom";

const Tag = ({tag}) => {
    const [ setSingleTag] = useState([]);
    const { TagId } = useParams();

    // const getTag = () => {
    //     getTagById(id).then(singleTag => setSingleTag(singleTag));
    // };
    const handleDelete = (evt) => {
        evt.preventDefault();
        var results = (window.confirm('Delete the item?'))
        if (results) {
            deleteTag(TagId)
                .then(getAllTags)
        };
        // useEffect(() => {
        //     getTagById();
        // }, []);
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