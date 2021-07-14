import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const Tag = ({ tag }) => {
    return (
        <Card>
            <p>{tag.name}</p>
        </Card>
    );
};

export default Tag;