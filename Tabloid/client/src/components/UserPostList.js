import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getUserPost } from "../modules/postManager";
import Post from "./Post"

const UserPostList = () => {
    const [ posts, setPosts ] = useState([]);

    const { id } = useParams;

    useEffect(() => {
        getUserPost(id)
            .then(setPosts)
    }, [id]);

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