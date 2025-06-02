import React from "react";
import { useForm } from 'react-hook-form';

const NewBlog = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <React.Fragment>
            <h1>Add New Blog</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Blog Title</label>
            <input
                type="text"
                placeholder="title"
                {...register("title", {
                    required: "Title is required",
                    minLength: { value: 10, message: "Title must be at least 10 characters" },
                    maxLength: { value: 250, message: "Title must be at most 250 characters" },
                    pattern: {
                        value: /^[\w\s.,:!?'"-]+$/i,
                        message: "Title contains invalid characters"
                    }
                })}
            />
            {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}

            <label>Blog Content</label>
            <textarea
                {...register("content", {
                    required: "Content is required",
                    minLength: { value: 10, message: "Content must be at least 10 characters" },
                    maxLength: { value: 10000, message: "Content must be at most 10,000 characters" }
                })}
            />
            {errors.content && <p style={{ color: "red" }}>{errors.content.message}</p>}

            <input type="submit" />
        </form>
            </React.Fragment>
    );
};

export default NewBlog;
