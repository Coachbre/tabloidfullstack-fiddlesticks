import React, { useEffect, useState } from "react";
//import { Card, CardBody, CardHeader, CardText, Button } from "reactstrap";
import { getAllPosts } from "../modules/postManager"
import  Post  from "./Post";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        getAllPosts().then(posts => setPosts(posts));
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <h1>Latest Posts</h1>
            <div className="container">
                <div className="row justify-content-center">
                    {posts.map((post) => (
                        <Post post={post} key={post.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PostList;