import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import CategoryList from "./CategoryList";
import UserList from "./UserList";
import CommentList from "./CommentList";
import TagList from "./TagList";
import TagForm from "./TagForm";

import PostList from "./PostList";
import MyPost from "./MyPost";
import PostDetails from "./PostDetail";
import UserDetails from "./UserDetails";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/tags">
          <TagList />
        </Route>

        <Route exact path="/tags/add">
          <TagForm />
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
        <Route path="/comment/GetByPostId/:postId(\d+)">
          {isLoggedIn ? <CommentList /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/myPost">
          <MyPost /> 
        </Route>
        <Route path="/post/:id(\d+)" exact>
          {isLoggedIn ? <PostDetails /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/users">
          {isLoggedIn ? <UserList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/users/:id(\d+)">
          {isLoggedIn ? <UserDetails /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </main>
    //EXACT PATH can be used when routes begin the same
  );
}