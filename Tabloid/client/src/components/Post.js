import React from "react";
import { Card, CardBody } from "reactstrap";

const Post = ({ post }) => {
  return (
    <Card>
      <CardBody>
        <img src={ post.imageLocation } alt={ `Image for ${ post.title }` } />
        <h1>{ post.title }</h1>
        <p>{ post.content }</p>
        <p>Publish Date: { post.publishDateTime }</p>
        <h5>Comments:</h5>
        <p>{post.comment?.map(c => c.title)}</p>
      </CardBody>
    </Card>
  );
};

export default Post;