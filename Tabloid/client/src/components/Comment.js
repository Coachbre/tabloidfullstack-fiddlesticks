import React from "react";
import { Card, CardBody } from "reactstrap";

const Comment = ({ comment }) => {
  return (
    <Card className="m-4">
      <CardBody>
          <strong>{comment.subject}</strong>
          <p>{comment.content}</p>
          <p>Date posted: {comment.createDateTime}</p>
          <p>Posted by: {comment.userProfile.displayName}</p>          
      </CardBody>
    </Card>
  );
};

export default Comment;
