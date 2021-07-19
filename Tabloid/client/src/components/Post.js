import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


const Post = ({ post }) => {

  // Post need to be ordered by Publish date amd redone at MM/DD/YYYY
  const date = new Date(post.publishDateTime);

  const publishDateTime = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

  return (
    <Card>
      <CardBody>

        <img src={post.imageLocation} alt={post.title} />
        <br />
        <p>
          <Link to={`/post/${post.id}`}>
            <strong>{post.title}</strong>
          </Link>
        </p>
        <p>{post.content}</p>
        <p>Publish Date: {publishDateTime}</p>

      </CardBody>
    </Card>
  );
};

export default Post;