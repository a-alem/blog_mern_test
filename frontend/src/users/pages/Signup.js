import React, { useContext } from "react";
import { useForm } from 'react-hook-form';

import { AuthContext } from "../../shared/context/auth-context";

const Signup = () => {
    const auth = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        auth.login();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input
                type="email"
                placeholder="Email"
                {...register("Email", { required: "Email is required" })}
            />
            {errors.Email && <p style={{ color: 'red' }}>{errors.Email.message}</p>}

            <label>Username</label>
            <input
                type="text"
                placeholder="Username"
                {...register("username", {
                    required: "Username is required",
                    pattern: {
                        value: /^[A-Za-z0-9_]{3,}$/,
                        message: "Username must be alphanumeric (or _), min 3 characters"
                    }
                })}
            />
            {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}

            <label>Password</label>
            <input
                type="password"
                placeholder="Password"
                {...register("Password", {
                    required: "Password is required",
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
                        message: "Password must include upper, lower, number, symbol, and be 8+ characters"
                    }
                })}
            />
            {errors.Password && <p style={{ color: 'red' }}>{errors.Password.message}</p>}

            <label>First Name</label>
            <input
                type="text"
                placeholder="First Name"
                {...register("first_name", {
                    required: "First name is required",
                    pattern: {
                        value: /^[A-Za-z]{2,}$/,
                        message: "Only letters, at least 2 characters"
                    }
                })}
            />
            {errors.first_name && <p style={{ color: 'red' }}>{errors.first_name.message}</p>}

            <label>Last Name</label>
            <input
                type="text"
                placeholder="Last Name"
                {...register("last_name", {
                    required: "Last name is required",
                    pattern: {
                        value: /^[A-Za-z]{2,}$/,
                        message: "Only letters, at least 2 characters"
                    }
                })}
            />
            {errors.last_name && <p style={{ color: 'red' }}>{errors.last_name.message}</p>}

            <input type="submit" />
        </form>
    );
};

export default Signup;