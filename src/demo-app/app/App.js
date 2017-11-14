import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Routes from "../../routing/Routes";
import RouteNavItem from "../../component-lib/routenavitem/RouteNavItem";

class App extends Component {
  render() {

    const childProps = {
      isAuthenticated: true,
      userHasAuthenticated: ()=>{}
    };

    return (
      <div className="App container">
        <Link to="/">Starter App</Link>
        <RouteNavItem href="/signup">Signup</RouteNavItem>
        <RouteNavItem href="/login">Login</RouteNavItem>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;