import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { logout } from "../modules/authManager";

export default function Header({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RRNavLink} to="/">
          Tabloid
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn && (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/">
                    Home
                  </NavLink>
                </NavItem>

<<<<<<< HEAD
                <NavLink tag={RRNavLink} to="/post/add">Add Post</NavLink>
                <NavLink tag={RRNavLink} to="/post">Posts</NavLink>
                <NavLink tag={RRNavLink} className="nav-link" to="/UserPosts">My Posts</NavLink>
                
             
              
              
            
=======
                <NavItem>
                  <NavLink tag={RRNavLink} to="/post">Posts</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" to="/UserPosts">My Posts</NavLink>
                </NavItem>



>>>>>>> c9ae7ff9d8c6402ddd15e0b37a07ec3002a9d390

                <NavItem>
                  <NavLink tag={RRNavLink} to="/tags">
                    Tag Management
                  </NavLink>
                </NavItem>

<<<<<<< HEAD
=======

>>>>>>> c9ae7ff9d8c6402ddd15e0b37a07ec3002a9d390
              </>
            )}

          </Nav>
          <Nav navbar>
            {isLoggedIn && (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/category">
                    Categories
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/users">
                    User Profiles
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a
                    aria-current="page"
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={logout}
                  >
                    Logout
                  </a>
                </NavItem>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/register">
                    Register
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
