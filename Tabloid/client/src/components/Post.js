import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Card>
      <CardBody>
        <img src={ post.imageLocation } alt={ post.title }/>
        <p>
        <Link to={`/post/${post.id}`}>
            <strong>{post.title}</strong>
          </Link>
          </p>
        <p>{ post.content }</p>
        {/*<p>Publish Date: { post.publishDateTime }</p>*/}
      </CardBody>
    </Card>
  );
};

export default Post;