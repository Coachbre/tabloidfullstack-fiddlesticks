import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <tr>
          {/* <th scope="row">1</th> */}
          <td>{user.}</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
  );
};

export default User;
