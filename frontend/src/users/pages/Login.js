import React, { useContext } from "react";
import { useForm } from 'react-hook-form';

import { AuthContext } from "../../shared/context/auth-context";

const Login = () => {
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
                {...register("Email", { required: true })}
            />
            {errors.Email && <p style={{ color: 'red' }}>Email is required</p>}
            <label>Password</label>
            <input
                type="password"
                placeholder="Password"
                {...register("Password", {
                    required: true,
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
                        message: "Password must include upper, lower, number, symbol, and be 8+ characters"
                    }
                })}
            />
            {errors.Password && <p style={{ color: 'red' }}>{errors.Password.message || 'Password is required'}</p>}

            <input type="submit" />
        </form>
    )
};

export default Login;