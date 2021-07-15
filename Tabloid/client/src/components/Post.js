import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Card>
      <CardBody>
        <img src={ post.imageLocation } alt={ post.title }/>
        <Link to={`/post/${post.id}`}>
            <strong>{post.title}</strong>
          </Link>
        <p>{ post.content }</p>
        <p>Publish Date: { post.publishDateTime }</p>
        <h5>Comments:</h5>
        <p>{post.comment?.map(c => c.title)}</p>
      </CardBody>
    </Card>
  );
};

export default Post;