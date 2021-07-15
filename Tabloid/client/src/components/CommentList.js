import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetCommentByPost } from "../modules/commentManager";
import  Comment  from "./Comment";


const CommentList = () => {

    const [comments, setComments] = useState();

    const { postId } = useParams();

    useEffect(() => {
        GetCommentByPost(postId)
            .then(setComments);
    }, []);

    // if (!comment) {
    //     return null;
    // }
        return (
            <>
                <h1>Post Comments:</h1>
                <div className="container">
                    <div className="row justify-content-center">
                        {comments.map((comment) => (
                            <Comment comment={comment} key={comment.id} />
                        ))}
                    </div>
                </div>
            </>
        );
    };
    
    export default CommentList;