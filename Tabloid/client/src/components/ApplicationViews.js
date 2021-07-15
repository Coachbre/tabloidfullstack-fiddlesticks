import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import CategoryList from "./CategoryList";


import TagList from "./TagList";

import PostList from "./PostList";
import UserPostList from "./UserPostList";
import PostDetails from "./PostDetail";

export default function ApplicationViews({ isLoggedIn }) {

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>

        <Route path="/tags">
          <TagList />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route exact path="/category">
          <CategoryList />
        </Route>

        <Route exact path="/post">
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/UserPosts">
        {isLoggedIn ? <UserPostList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/post/:id(\d+)" exact>
              {isLoggedIn ? <PostDetails /> : <Redirect to="/login" />}
        </Route>


      </Switch>
    </main>
  );
};
