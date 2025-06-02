import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import './NavLinks.css'

const NavLinks = props => {
    const auth = useContext(AuthContext);
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>All Posts</NavLink>
        </li>
        <li>
            {auth.isLoggedIn ? <NavLink to="/posts/mine">My Posts</NavLink> : null}
        </li>
        <li>
            {auth.isLoggedIn ? <NavLink to="/posts/new">New Post</NavLink> : null}
        </li>
        <li>
            <NavLink to="/users">All Users</NavLink>
        </li>
        <li>
            {!auth.isLoggedIn ? <NavLink to="/login">Login</NavLink> : null}
        </li>
        <li>
            {!auth.isLoggedIn ? <NavLink to="/signup">Signup</NavLink> : null}
        </li>
        <li>
            {auth.isLoggedIn ? <button onClick={auth.logout}>Logout</button> : null}
        </li>
    </ul>
};

export default NavLinks;