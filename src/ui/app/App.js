import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import Routes from "../../routing/Routes";
import RouteNavItem from "../routenavitem/RouteNavItem";

class App extends Component {
  render() {

    const childProps = {
      isAuthenticated: true,
      userHasAuthenticated: ()=>{}
    };

    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Starter App</Link>
            </Navbar.Brand>
            </Navbar.Header>
              <Nav pullRight>
                <RouteNavItem href="/signup">Signup</RouteNavItem>
                <RouteNavItem href="/login">Login</RouteNavItem>
              </Nav>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;