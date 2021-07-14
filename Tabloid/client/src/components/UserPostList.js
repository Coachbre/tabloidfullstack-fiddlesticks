import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { getUserPost } from "../modules/postManager";

const UserPostList = () => {
    const [ posts, setPosts ] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getUserPost()
    }, []);

    return (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <Link to={`/post/GetById/${post.id}`}>
                <strong>
                  {post.title}
                </strong>
              </Link>
              <p>{post.postCategory.name}</p>
              <p>Written by: {post.postAuthor.fullName}</p>
              <Button class="edit_button" color="primary">
                <Link to={`/post/edit/${post.id}`} style={{ color: `#FFF` }}>
                  Edit This Post
                </Link>
              </Button>
              <Button className="btn" variant="primary" size="sm">
                <Link className="deletePost" to={`/Post/${post.id}/Delete`} post_title={post.title}>
                  Delete
                    </Link>
              </Button>
            </div>
          ))}
        </div>
    );
};

export default UserPostList;