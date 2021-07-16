import React, { useEffect, useState } from "react";
import { getByUser } from "../modules/postManager";
import Post from "./Post"

const MyPost = () => {
    const [ posts, setPosts ] = useState([]);

    const getPost = () => {
        return getByUser()
            .then(posts => setPosts(posts))
    }

    useEffect(() => {
        getPost();
    }, []);  


    return (
<>
            <h1>My Posts</h1>
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

export default MyPost;