import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
    Form,
    FormGroup,
    Card,
    CardBody,
    Label,
    Input, Button
} from 'reactstrap';
import { addPost, getAllPosts } from "../modules/postManager";
import { getAllCategories } from "../modules/categoryManager";

const PostForm = () => {

    const [post, setPost] = useState({
        title: "",
        content: "",
        imageLocation: "",
        createDateTime: "",
        publishDateTime: null,
        categoryId: 0
    });



    useEffect(() => {
        getAllPosts()
            .then()
    }, []);

    const handleInputChange = (event) => {
        const newPost = { ...post };

        newPost[event.target.id] = event.target.value
        setPost(newPost);
    };

    const handleSave = () => {
        addPost({
            title: post.title,
            content: post.content,
            imageLocation: post.imageLocation,
            createDateTime: new Date(),
            publishDateTime: post.publishDateTime,
            categoryId: post.categoryId,
        });
    };

    // const PostForm = () => {

    //     const emptyPost = {
    //         title: "",
    //         content: "",
    //         imageLocation: "",
    //         createDateTime: "",
    //         publishDateTime: "",
    //         isApproved: false,
    //         categoryId: 0
    //     };

    //     const [post, setPost] = useState(emptyPost);

    //     const history = useHistory();

    //     const handleInputChange = (evt) => {
    //         const newPost = { ...newPost }
    //         let selectedValue = evt.target.value
    //         newPost[evt.target.id] = selectedValue
    //         setPost(newPost)
    //     };

    //     const handleSave = (event) => {
    //         event.preventDefault();
    //         addPost(post)
    //             .then(() =>  history.push("/post"));       
    //     };

    return (
        <Card className="col-sm-12 col-lg-6">
            <CardBody>
                <Form>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                            id="title"
                            value={post.title}
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="imageLocation">Image URL</Label>
                        <Input type="text"
                            id="imageLocation"
                            value={post.imageLocation}
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
                        <Label for="publishDateTime">Publication Date</Label>
                        <Input type="text"
                            id="publishDateTime"
                            value={post.publishDateTime}
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    {/* <FormGroup>
                        <Input
                            type="select"
                            value={post.categoryId}
                            name="categoryId"
                            id="categoryId"
                            onChange={handleInputChange}
                        >
                            <option value="0">Select a Category</option>
                            {categories.map((c) => (
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            ))}
                        </Input>
                    </FormGroup> */}

                </Form>
                <Button className="btn btn-primary" onClick={handleSave}>
                        Save Post                 
                </Button>

            </CardBody>
        </Card>

    );
};

export default PostForm