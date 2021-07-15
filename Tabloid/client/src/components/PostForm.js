import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addPost, getAllPosts } from "../modules/postManager";
import { Button } from "reactstrap";


const PostForm = () => {

    const [post, setPost] = useState({
        title: "",
        content: "",
        imageLocation: "",
        createDateTime: "",
        publishDateTime: "",
        isApproved: false,
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
            isApproved: true,
            categoryId: post.categoryId,
        });
    };

    return (
        <section className="post_form">
            <h2 className="post_form_header">New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text" id="title" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Title" value={post.title} />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <textarea name="content" id="content" rows="20" onChange={ handleInputChange} required autoFocus className="form-control" placeholder="Content" value={post.content} />
                </div>
                <div className="form-group">
                    <label htmlFor="imageLocation">Image Location:</label>
                    <input
                        type="text" id="imageLocation" onChange={ handleInputChange} required autoFocus className="form-control" placeholder="Image Location" value={post.imageLocation} />
                </div>
                <div className="form-group">
                    <label htmlFor="publishDateTime">Publish Date:</label>
                    <input
                        type="date" id="publishDateTime" onChange={ handleInputChange} required autoFocus className="form-control" placeholder="Publish Date" value={post.publishDateTime} />
                </div>
                <div className="form-group">
                    <label htmlFor="categoryId">Category: </label>
                    <select name="categoryId" id="categoryId" className="form-control" onChange={ handleInputChange}>
                        <option value="0">Select a category</option>
                        {/*{categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                        </option>*/}
                        ))
                    </select>
                </div>
            </fieldset>
            <Button color="primary" onClick={handleSave}>
                <Link className="savePost" to={"/Posts"} style={{ color: `#FFF` }}>
                    Save Post
                </Link>
            </Button>

        </section>
    );
};

export default PostForm