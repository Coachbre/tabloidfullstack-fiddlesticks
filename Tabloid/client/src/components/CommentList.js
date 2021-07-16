import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { GetCommentByPost } from "../modules/commentManager";
import  Comment  from "./Comment";
import { Button, Table } from "reactstrap";

const CommentList = (post) => {

    const [comments, setComments] = useState([]);
    const { postId } = useParams();


    useEffect(() => {
        GetCommentByPost(postId)
        .then(setComments)
    }, [postId]);

        return (
            <>
            <div className="container">
             <div className="row justify-content-center">
                <h1>Post Comments:</h1>
                 <Table>
                 <thead>
                   <tr>
                        <th>Subject</th>
                        <th>Content</th>
                        <th>Posted by</th>
                        <th>Date Posted</th>
                    </tr>
                 </thead>
                 <tbody>
                        {comments?.map((comment) => (
                            <Comment comment={comment} key={comment.Id} />
                        ))}

                    </tbody>
                </Table>
                    <div>
                    <Button className="b addComment"><Link className="a" to={`/comment/${postId}`}>Add Comment</Link></Button>
                    <Button className="b backtopost"><Link className="a" to={`/post/${postId}`}>Back to post</Link></Button>
                    </div>
                </div>
                </div>
            </>
        );
    };
    
    export default CommentList;