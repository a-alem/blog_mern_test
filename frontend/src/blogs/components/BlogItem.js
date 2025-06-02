import React from "react";
import { Link } from 'react-router-dom';

import './BlogItem.css';


const BlogItem = props => {
    return (
        <li className="blog-item">
            <Link to={`/posts/${props.id}`}>
                <div className="blog-item__content">
                    <h1>{props.data.title}</h1>
                </div>
            </Link>
            <div className="blog-item__user-info">
                <h2>{props.data.first_name} {props.data.last_name}</h2>
                <h3>{props.data.username}</h3>
            </div>
            <div className="blog-item__time-info">
                <h3>Created at: {props.data.created_at}</h3>
                <h3>Last Updated at: {props.data.updated_at}</h3>
            </div>
        </li>
    );
}

export default BlogItem;