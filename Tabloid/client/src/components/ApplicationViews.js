import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import CategoryList from "./CategoryList";
import UserList from "./UserList";

import TagList from "./TagList";

import PostList from "./PostList";
import UserDetails from "./UserDetails";

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

        <Route exact path="/users">
          {isLoggedIn ? <UserList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/users/:id">
          {isLoggedIn ? <UserDetails /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </main>
  );
}
