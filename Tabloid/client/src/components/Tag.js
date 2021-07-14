import React from "react";
import { Card, CardBody } from "reactstrap";

const Tag = ({ tag }) => {
    return (
        <Card>
            <CardBody>
                <p>{tag.name}</p>
          
            </CardBody>   
        </Card>
    );
};

export default Tag;