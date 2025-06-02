import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../shared/context/auth-context";

const BlogPost = () => {
    const auth = useContext(AuthContext);
    const BLOGS = [
        {
            id: '1',
            title: 'Hello world',
            content: 'Hello world long content',
            created_at: '2025-02-02',
            last_updated: '2025-03-03',
            username: 'alem117',
            first_name: 'Abdulelah',
            last_name: 'Alem',
        },
        {
            id: '2',
            title: 'Hello world 22',
            content: 'Hello world long content 22',
            created_at: '2025-02-02',
            last_updated: '2025-03-03',
            username: 'alem117',
            first_name: 'Abdulelah',
            last_name: 'Alem',
        },
        {
            id: '3',
            title: 'Hello world 44',
            content: 'Hello world long content 44',
            created_at: '2025-02-02',
            updated_at: '2025-03-03',
            username: 'alem117',
            first_name: 'Abdulelah',
            last_name: 'Alem',
        }
    ]
    const postId = useParams().postId;
    console.log(postId);
    const blog = BLOGS.find(blog => blog.id === postId);
    return(
        <div>
            <h1>{blog.title}</h1>
            <div>{blog.content}</div>
            <p>{blog.created_at}</p>
            <p>{blog.updated_at}</p>
            {auth.isLoggedIn ?
            <React.Fragment>
                <button>Edit</button>
                <button>Delete</button>
            </React.Fragment> : null
            }
        </div>
    )
}

export default BlogPost;