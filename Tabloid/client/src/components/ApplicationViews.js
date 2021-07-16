import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import CategoryList from "./CategoryList";
import CategoryForm from "./CategoryForm";


import TagList from "./TagList";

import PostList from "./PostList";


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
          {isLoggedIn ? <CategoryList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/category/add">
          <CategoryForm />
        </Route>

        <Route exact path="/post">
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>

      </Switch>
    </main>
  );
};
