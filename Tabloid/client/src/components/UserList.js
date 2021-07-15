import React, { useEffect, useState } from "react";

import { getAllUsers } from "../modules/userManager";
import { Button, Table } from "reactstrap";
import User from "./User";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    getAllUsers().then((users) => setUsers(users));
  };

  //   const handleChange = (e) => {
  //     setState(e.target.value);
  //   };
  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     searchVideos(criterion, true).then((videos) => setVideos(videos));
  //   };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h2>User Profiles</h2>
        <Table>
          <thead>
            <tr>
              <th>FullName</th>
              <th>Display Name</th>
              <th>User Type</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User user={user} key={user.id} />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserList;
