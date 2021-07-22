import { NavLink } from "react-router-dom";
import React from "react";

function MainNav() {
  return (
    <div className="navbar-nav mr-auto align-items-md-center pt-2">
      <NavLink
        to="/"
        exact
        className="nav-link text-light font-sm text-shadow mr-3"
        activeClassName="router-link-exact-active"
      >
        Dungeoneer
      </NavLink>
      <NavLink
        to="/profile"
        exact
        className="nav-link text-light font-xs mr-3"
        activeClassName="router-link-exact-active"
      >
        Profile
      </NavLink>
      {/* <NavLink
        to="/external-api"
        exact
        className="nav-link text-light font-xs mr-3"
        activeClassName="router-link-exact-active"
      >
        API
      </NavLink> */}
      <NavLink
        to="/access-test"
        exact
        className="nav-link text-light font-xs"
        activeClassName="router-link-exact-active"
      >
        Accessibility
      </NavLink>
    </div>
  );
}

export default MainNav;
