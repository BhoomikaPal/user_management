import { AppBar, Toolbar, styled } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;
const Tabs = styled(NavLink)`
  font-size: 20px;
  margin: 15px;
  color: inherit;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">CRUD Operation</Tabs>
        <Tabs to="/AllUser">All users</Tabs>
        <Tabs to="/AddUser">Add User</Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
