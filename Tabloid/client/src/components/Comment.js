import React from "react";
import { Card, CardBody } from "reactstrap";

const Comment = ({ comment }) => {

  const date = new Date(comment.createDateTime);
  const createDateTime = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

  return (
    <Card className="m-4">
      <CardBody>
          <strong>{comment.subject}</strong>
          <p>{comment.content}</p>
          <p>Posted by: {comment.userProfile.displayName}</p> 
          <p>Date posted: {createDateTime}</p>         
      </CardBody>
    </Card>
  );
};

export default Comment;
