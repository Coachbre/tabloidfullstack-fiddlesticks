import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody, Button } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../modules/postManager";

const PostDetails = () => {

    const [post, setPost] = useState();

    const { id } = useParams();

    useEffect(() => {
        getPostById(id)
            .then(setPost);
    }, [id]);

    if (!post) {
        return null;
    }

    return (
        <div>
            <Card className="m-4">
                <p className="text-left px-2">Posted by: {post.userProfile.displayName}</p>
                <CardImg top src={post.imageLocation} alt={post.title} />
                <CardBody>
                    <p>
                        <strong>{post.title}</strong>
                    </p>
                    <p>{post.content}</p>
                    <p>{new Date(post.publishDateTime).toLocaleDateString()}</p>
                    <Button className="b addComment"><Link className="a" to={`/comment/create/${post.id}`}>Add Comment</Link></Button>
                    <Button className="b viewComment"><Link className="a" to={`/comment/GetByPostId/${post.id}`}>View Comments</Link></Button>
                </CardBody>

            </Card>
        </div>
    );
};

export default PostDetails;