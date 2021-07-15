import React from "react";
import { Card, CardBody } from "reactstrap";

export default function Comment({ comment }) {
  return (
    <Card className="m-4">
      <CardBody>
        <h1>Comment</h1>
          <strong>{comment.subject}</strong>
          <p>{comment.content}</p>
          <p>{comment.userProfile.displayName}</p>          
          <p>{comment.CreateDateTime}</p>
      </CardBody>
    </Card>
  );
}
