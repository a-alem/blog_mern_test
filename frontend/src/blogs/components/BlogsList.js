import React from "react";

import './BlogsList.css';
import BlogItem from "./BlogItem";

const BlogsList = props => {
    if (props.items.length === 0) {
        return <div className="center">
            <h2>No blogs found.</h2>
        </div>;
    }

    return(
        <ul className="blogs-list">
            {props.items.map((blog) => (
                <BlogItem key={blog.id} id={blog.id} data={blog} />
            ))}
        </ul>
    )
}

export default BlogsList;