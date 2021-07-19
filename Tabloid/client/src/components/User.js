import React from "react";
import { Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { deactivateUser } from "../modules/userManager";

const User = ({ user }) => {
  const history = useHistory();

  const handleDeactivate = (e) => {
    e.preventDefault();
    var deactivateConfirm = window.confirm(
      `Deactivate user ${user.displayName}?`
    );
    if (deactivateConfirm == true) {
      // deactivateUser(user).then(() => {
      history.push("/users/deactivated");
      // });
    } else {
      history.push("users");
    }
  };

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
        <Button color="danger" onClick={handleDeactivate}>
          Deactivate
        </Button>
      </td>
    </tr>
  );
};

export default User;
