import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <tr>
      <td>{user.fullName}</td>
      <td>{user.displayName}</td>
      <td>{user.userType.name}</td>
    </tr>
  );
};

export default User;
