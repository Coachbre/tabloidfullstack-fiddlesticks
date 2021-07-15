import React, { useState } from "react";
import { Form, FormGroup, Card, CardBody, Label, Input, Button } from "reactstrap";
import { useHistory} from "react-router-dom";
import { addPost } from "../modules/postManager";


const PostForm = ({ getPost }) => {

    const emptyPost = {
        id: "",
        title: "",
        content: "",
        imageLocation: "",
        publishDateTime: null,
        categoryId: 0
    };

    const [post, setPost] = useState(emptyPost);

    const history = useHistory();

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const postCopy = { ...post };

        postCopy[key] = value;

        setPost(postCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();

        addPost(post).then((p) => {
            history.push("/post");
        });
    };

    return (
        <Form>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text"
                    id="imageLocation"
                    value={post.imageLocation}
                    onChange={handleInputChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="imageLocation">Image URL</Label>
                <Input
                    id="title"
                    value={post.title}
                    onChange={handleInputChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="content">Content</Label>
                <br />
                <Input
                    type="textarea"
                    value={post.content}
                    rows="10"
                    id="content"
                    onChange={handleInputChange}
                />
            </FormGroup>

            <FormGroup>
                <Input
                    type="select"
                    value={post.categoryId}
                    name="categoryId"
                    id="categoryId"
                    onChange={handleInputChange}
                />
                <option value="0">Select a Category</option>
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
        </Form>
    );
};

export default PostForm