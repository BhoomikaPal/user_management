import React, { Component } from "react";
import "./App.css";
import AddUser from "./components/addUser";
import NavBar from "./components/navBar";
import CrudOperation from "./components/CrudOp";
import AllUsers from "./components/allUsers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./components/editUser";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<CrudOperation />} />
            <Route path="/AllUser" element={<AllUsers />} />
            <Route path="/AddUser" element={<AddUser />} />
            <Route path="/editUser/:id" element={<EditUser />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
