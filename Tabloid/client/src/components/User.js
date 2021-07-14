import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <tr>
      {/* <th scope="row">1</th> */}
      <td>
        {user.FirstName} {user.LastName}
      </td>
      <td>{user.DisplayName}</td>
      <td>{user.UserType.Name}</td>
    </tr>
  );
};

export default User;
