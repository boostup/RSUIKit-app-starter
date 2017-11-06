import React from "react";
import { Route, Link } from "react-router-dom";
import "./RouteNavItem.css";

export default props =>
  <Route
    path={props.href}
    exact
    children={({ match, history }) => {
      return (
        <li className="nav-item">
          <Link 
            to={props.href}
            className={`nav-link ${match ? 'active' : ''}`} 
            onClick={e => history.push(e.currentTarget.getAttribute("href"))}
            >{props.children}</Link>
        </li>
      )}}
  />;

/**
 * Works with bootstrap v3.  Keeping this for quick restoration in case needed.
 */
// import { NavItem } from "react-bootstrap";
//Could not use NavItem from 'react-bootrap' because I prefer the stylesheet for bootstrap v4 than v3,
//However, the 'react-bootrap' implement v3 of bootstrap...
// <NavItem
//   onClick={e => history.push(e.currentTarget.getAttribute("href"))}
//   {...props}
//   active={match ? true : false}
// >
//   {props.children}
// </NavItem>