import React from "react";
import { Card, CardBody } from "reactstrap";
import CommentList from "./CommentList";

const Comment = ({ comment }) => {
  return (
    <Card className="m-4">
      <CardBody>
          <strong>{comment.subject}</strong>
          <p>{comment.content}</p>
          {/* <p>{comment.userProfile.displayName}</p>           */}
      </CardBody>
    </Card>
  );
};

export default Comment;
