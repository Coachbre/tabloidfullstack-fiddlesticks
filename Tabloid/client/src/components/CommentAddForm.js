import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addComment } from '../modules/commentManager'


const CommentAddForm = ( ) => {
  const [comment, setComment] = useState({
      postId: postId,
      userProfileId: userProfileId,
      subject: "",
      content: ""
  });
  
    const history = useHistory();
  
    const handleInputChange = (evt) => {
      const newComment = { ...comment }
      let selectedValue = evt.target.value
      newComment[evt.target.id] = selectedValue
      setComment(newComment)
    };
  
    const handleSave = (evt) => {
      evt.preventDefault();
      addComment(comment)
          .then(() => history.push(`/comment/${postId}`));
  };
  
    return (
      <Form>
        <FormGroup>
          <Label for="subject">Subject:</Label>
          <Input type="text" name="subject" id="subject" placeholder="comment subject" required
            value={comment.subject}
            onChange={handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label for="content">URL</Label>
          <Input type="textarea" name="content" id="content" placeholder="comment content" required 
            value={comment.content}
            onChange={handleInputChange} />
        </FormGroup>
        <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
      </Form>
    );
  };
  
  export default CommentAddForm;
  