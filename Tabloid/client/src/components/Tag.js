import React, {useState} from "react";
import { getAllTags, getTagById, deleteTag } from "../modules/tagManager";
import { Card, CardBody, Button } from "reactstrap";

const Tag = () => {
    const [singleTag, setSingleTag] = useState([]);

    const getTag = () => {
        getTagById(id).then(singleTag => setSingleTag(singleTag));
    };

    const handleDelete = (evt) => {
        evt.preventDefault();
        var results = (window.confirm('Delete the item?'))
        if (results) {
            deleteTag(singleTag.id)
                .then(getAllTags)
        };


        // useEffect(() => {
        //     getTagById();
        // }, []);

    };

    return (
        <Card>
            <CardBody>
                <p>{singleTag.name}</p>
                <Button onClick={handleDelete}>Delete</Button>
            </CardBody>
        </Card >
    );
};

export default Tag;