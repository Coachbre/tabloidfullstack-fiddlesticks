import React, { useEffect, useState } from "react";
import { getUserPost } from "../modules/postManager";
import Post from "./Post"

const UserPostList = () => {
    const [ posts, setPosts ] = useState([]);

    const getPost = () => {
        return getUserPost()
            .then(posts => setPosts(posts))
    }

    useEffect(() => {
        getPost();
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

export default UserPostList;