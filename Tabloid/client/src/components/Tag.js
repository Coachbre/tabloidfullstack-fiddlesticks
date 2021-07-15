import React from "react";
import { Card, CardBody } from "reactstrap";

const Tag = ({ tag }) => {
    return (
        <Card>
            <CardBody>
                <p>{tag.name}</p>
                <button>Delete?</button>
            </CardBody>   
        </Card>
    );
};

export default Tag;