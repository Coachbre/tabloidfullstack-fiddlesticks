import React, { useEffect, useState } from "react";

import { getAllUsers, getDeactivatedUsers } from "../modules/userManager";
import { Button, Table } from "reactstrap";
import User from "./User";

const DeactivatedUsers = () => {
  const [deactivated, setDeactivated] = useState([]);

  const getDeactivated = () => {
    getDeactivatedUsers().then((users) => setDeactivated(users));
  };

  useEffect(() => {
    // getDeactivated();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h2> Deactivated User Profiles</h2>
        <Table>
          <thead>
            <tr>
              <th>
                <h5>Name</h5>
              </th>
              <th>
                <h5>Display Name</h5>
              </th>
              <th>
                <h5>User Type</h5>
              </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {deactivated.map((user) => (
              <p>{user.displayName}</p>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DeactivatedUsers;
