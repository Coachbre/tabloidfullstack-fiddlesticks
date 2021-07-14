import React from "react";
import { Card, CardBody } from "reactstrap";

export default function Comment({ comment }) {
  return (
    <Card className="m-4">
      <CardBody>
          <strong>{comment.subject}</strong>
          <p>{comment.content}</p>
          <p>{comment.UserProfile.displayName}</p>          
          <p>{comment.CreateDateTime}</p>
      </CardBody>
    </Card>
  );
}
