import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardFooter } from "reactstrap";
import { useParams, useHistory } from "react-router-dom";

import { getUserById } from "../modules/userManager";

const UserDetails = () => {
  const [user, setUser] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getUserById(id).then(setUser);
  }, []);

  if (!user) {
    return null;
  }

  const dateString = user.createDateTime.toString();
  const shortDate = dateString.split("T");
  const ymd = shortDate[0].split("-");
  const YYYY = ymd[0];
  const MM = ymd[1];
  const DD = ymd[2];

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <Card>
            <CardHeader>
              <div className="row justify-content-between">
                <h3 className="d-flex align-items-center ml-3">
                  {user.fullName}
                </h3>
                <img
                  className="d-flex justify-content-end"
                  src={user.imageLocation}
                />
              </div>
            </CardHeader>
            <CardBody>
              <h4 className="mb-4">DisplayName: {user.displayName}</h4>
              <h4 className="mb-4">Email: {user.email}</h4>
              <CardFooter>
                <div className="row">
                  <h4>Registration Date: {`${MM}/${DD}/${YYYY} `}</h4>
                  {"   "}
                  <h4 className="ml-5">{user.userType.name}</h4>
                </div>
              </CardFooter>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
