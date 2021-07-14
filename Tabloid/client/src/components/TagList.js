import React, { useEffect, useState } from "react";
import Tag from './Tag';
import { getAllTags } from "../modules/tagManager";

const TagList = () => {
    const [tags, setTags] = useState([]);
    // ^initially set to an empty array
    const getTags = () => {
        getAllTags().then(tags => setTags(tags));
    };

    useEffect(() => {
        getTags();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                {tags.map((tag) => (
                    <Tag tag={tag} 
                    key={tag.id} />
                ))}
            </div>
        </div>
    );
};

export default TagList;
//When the component loads, it will call the getAllTags function then
//set the state of the tag array and re-render to display a list of tag names.