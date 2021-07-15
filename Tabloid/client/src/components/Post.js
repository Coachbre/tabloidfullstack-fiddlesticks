import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Card>
      <CardBody>
        <img src={ post.imageLocation } alt={ post.title }/>
        <br />
        <Link to={`/post/${post.id}`}>
            <strong>{post.title}</strong>
          </Link>
        <p>{ post.content }</p>
        <p>Publish Date: { post.publishDateTime }</p>
      </CardBody>
    </Card>
  );
};

export default Post;