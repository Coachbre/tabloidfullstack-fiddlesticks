import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addComment } from '../modules/commentManager'


const CommentAddForm = ( ) => {
    const emptyComment = {
      subject: '',
      content: ''
    };
  
    const history = useHistory();
    const [comment, setComment] = useState({ emptyComment });
  
    const handleInputChange = (evt) => {
      const value = evt.target.value;
      const key = evt.target.id;
  
      const NewComment = { ...comment };
  
      NewComment[key] = value;
      setComment(NewComment);
    };
  
    const handleSave = (evt) => {
      evt.preventDefault();
  
      addComment(comment).then((p) => {
          // Navigate the user back to the home route
          history.push("/");
      });
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
  