import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  //   const handleClick = (e) => {
  //     e.preventDefault();
  //   };

  return (
    <tr>
      <td>{user.fullName}</td>
      <td>{user.displayName}</td>
      <td>{user.userType.name}</td>
      <td>
        <Button
          color="primary"
          tag={Link}
          to={`/users/${user.id}`}
          //   type="submit"
          //   onClick={handleClick}
        >
          Details
        </Button>{" "}
      </td>
      <td>
        <Button color="info">Edit</Button>{" "}
      </td>
      <td>
        <Button color="danger">Deactivate</Button>
      </td>
    </tr>
  );
};

export default User;
