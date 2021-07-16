import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { deleteComment, GetCommentByPost } from "../modules/commentManager";

const Comment = ({ comment }) => {

  const date = new Date(comment.createDateTime);
  const createDateTime = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  const history = useHistory();

  const deleteAComment = (event) => {
    event.preventDefault()
    const confirmDelete = window.confirm("Please confirm if you want to delete this comment?")
    if (confirmDelete){
      deleteComment(comment.id).then(() => {history.push(`/comment/GetByPostId/${comment.postId}`)})
    };
  }


  return (
    <tr>
          <td><strong>{comment.subject}</strong></td>
          <td><p>{comment.content}</p></td>
          <td><p>{comment.userProfile.displayName}</p> </td>
          <td><p>{createDateTime}</p></td>  
          <td>
          <Button color="info">Edit</Button>{" "}
        </td>
        <td>
          <Button color="danger" onClick={deleteAComment}>Delete</Button>
        </td>      
    </tr>
  );
};

export default Comment;
