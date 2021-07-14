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
      </CardBody>
    </Card>
  );
};

export default Post;