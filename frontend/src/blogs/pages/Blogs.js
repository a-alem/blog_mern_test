import React from "react";

import BlogsList from "../components/BlogsList";

const Blogs = props => {
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
    if (props.isMine) {
        return (
            <React.Fragment>
                <h1>My Posts Only</h1>
                <BlogsList items={BLOGS}/>
            </React.Fragment>
        )
    }
    return <BlogsList items={BLOGS}/>;
}

export default Blogs;