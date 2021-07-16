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

// const PostForm = () => {

//     const [post, setPost] = useState({
//         title: "",
//         content: "",
//         imageLocation: "",
//         createDateTime: "",
//         publishDateTime: null,
//         categoryId: 0
//     });



//     useEffect(() => {
//         getAllPosts()
//             .then()
//     }, []);

//     const handleInputChange = (event) => {
//         const newPost = { ...post };

//         newPost[event.target.id] = event.target.value
//         setPost(newPost);
//     };

//     const handleSave = () => {
//         addPost({
//             title: post.title,
//             content: post.content,
//             imageLocation: post.imageLocation,
//             createDateTime: new Date(),
//             publishDateTime: post.publishDateTime,
//             categoryId: post.categoryId,
//         });
//     };

    const PostForm = () => {

        const emptyPost = {
            title: "",
            content: "",
            imageLocation: "",
            categoryId: 0
        };

        const [post, setPost] = useState(emptyPost);

        const [category, setCategory] = useState([]);

        const history = useHistory();

        const handleInputChange = (evt) => {

            const value = evt.target.value;
            const key = evt.target.id;

            const postCopy = { ...post }
           
            postCopy[key] = value;

            setPost(postCopy)
        };

        const getCategories = () => {
            return getAllCategories()
            .then(categoriesFromAPI => {
                setCategory(categoriesFromAPI)
            })
        }   

        const handleSave = (event) => {
            event.preventDefault();

            if (post.title === '' || post.content === '' || post.categoryId === 0 )
            {
            window.alert('title, content, and category are required fields')
            setPost({
                title: '',
                content: '',
                imageLocation: '',
                categoryId: 0
            })
            return history.push(`/post/add`);
            }
            else 
            {
                       addPost(post).then((p) => {
                history.push('/post');
            });
        }
    };

    useEffect(() => {
        getCategories();
    }, []) 

    return (
        <Card className="col-sm-12 col-lg-6">
            <CardBody>
                <Form>
                <h2>New Post</h2>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                            id="title"
                            value={post.title}
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="imageLocation">Header Image URL</Label>
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
                        <Input
                            type="select"
                            value={post.categoryId}
                            name="categoryId"
                            id="categoryId"
                            onChange={handleInputChange}
                        >
                            <option value="0">Select a Category</option>
                            {category.map((c) => (
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            ))}
                        </Input>
                    </FormGroup>

                </Form>
                <Button className="btn btn-primary" onClick={handleSave}>Save Post </Button>
                <Button className="btn btn-primary" onClick={() => history.push('/post')}>Cancel</Button>

            </CardBody>
        </Card>

    );
};

export default PostForm