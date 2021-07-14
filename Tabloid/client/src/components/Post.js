import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";


const PostList = () => {
  const { posts, getPosts } = useContext(PostContext);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="posts-container">
      <Col className="posts-header">
        <h1>All Posts</h1>
      </Col>
      <hr></hr>
      <Col>
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <Link to={`/post/GetById/${post.id}`}>
              <h3 className="posts-title">
                {post.title}
              </h3>
            </Link>
            <p className="posts--category">{post.postCategory.name}</p>
            <p className="posts--author">Written by: {post.postAuthor.fullName}</p>
          </div>
        ))}
      </Col>
    </div>
  );
};

export default PostList;