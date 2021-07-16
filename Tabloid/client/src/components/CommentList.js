import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { GetCommentByPost } from "../modules/commentManager";
import  Comment  from "./Comment";
import { Button } from "reactstrap";

const CommentList = (post) => {

    const [comments, setComments] = useState([]);
    const { postId } = useParams();


    useEffect(() => {
        GetCommentByPost(postId)
        .then(setComments)
    }, [postId]);

        return (
            <>
                <h1>Post Comments:</h1>
                <div className="container">
                    {/* <h3>{comments.title}</h3> */}
                    <div className="row justify-content-center">
                        {comments?.map((comment) => (
                            <Comment comment={comment} key={comment.Id} />
                        ))}
                    </div>
                    <div>
                    <Button className="b addComment"><Link className="a" to={`/post/${postId}`}>Back to post</Link></Button>
                    </div>
                </div>
            </>
        );
    };
    
    export default CommentList;