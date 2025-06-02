import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Blogs from "./blogs/pages/Blogs";
import Users from "./users/pages/Users";
import NewBlog from "./blogs/pages/NewBlog";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import BlogPost from "./blogs/pages/BlogPost";
import UpdateBlog from "./blogs/pages/UpdateBlog";
import './App.css';
import Login from "./users/pages/Login";
import { AuthContext } from "./shared/context/auth-context";
import Signup from "./users/pages/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, [])

  let routes;

  if (isLoggedIn) {
    routes = [
      <Route path="/" exact key="home">
        <Blogs />
      </Route>,
      <Route path="/posts/mine" exact key="mine">
        <Blogs isMine={true} />
      </Route>,
      <Route path="/posts/new" exact key="new">
        <NewBlog />
      </Route>,
      <Route path="/posts/:postId/update" exact key="update">
        <UpdateBlog />
      </Route>,
      <Route path="/posts/:postId" exact key="post">
        <BlogPost />
      </Route>,
      <Route path="/users" exact key="users">
        <Users />
      </Route>,
      <Route path="/users/:userId" exact key="user-detail">
        <Users />
      </Route>,
      <Redirect to="/" key="redirect" />
    ];
  } else {
    routes = [
      <Route path="/" exact key="home">
        <Blogs />
      </Route>,
      <Route path="/posts/:postId" exact key="post">
        <BlogPost />
      </Route>,
      <Route path="/users" exact key="users">
        <Users />
      </Route>,
      <Route path="/users/:userId" exact key="user-detail">
        <Users />
      </Route>,
      <Route path="/login" exact key="login">
        <Login />
      </Route>,
      <Route path="/signup" exact key="signup">
        <Signup />
      </Route>,
      <Redirect to="/login" key="redirect" />
    ];
  }

  return(
      <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            {routes}
          </Switch>
        </main>
      </Router>
      </AuthContext.Provider>
  )
}

export default App;
